import { Mantenimientos } from "../Interfaces";
import { Request, Response } from "express";
import { Mantenimiento } from "../models";

// Controlador para crear un nuevo mantenimiento
const CrearMantenimiento = async (req: Request, res: Response) => {
  try {
    // Obtener los datos del mantenimiento del cuerpo de la solicitud
    const nuevoMantenimiento: Mantenimientos = req.body;

    // Crear un nuevo mantenimiento en la base de datos
    const mantenimientoCreado: Mantenimientos = await Mantenimiento.create(
      nuevoMantenimiento
    );

    // Devolver el mantenimiento creado en la respuesta JSON
    res.status(201).json(mantenimientoCreado);
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al crear un mantenimiento:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para obtener todos los mantenimientos
const BuscarMantenimientos = async (req: Request, res: Response) => {
  try {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { ESTADO: true };

    // Usar Promise.all para realizar ambas consultas de manera concurrente
    const [total, datos]: [number, Mantenimientos[]] = await Promise.all([
      Mantenimiento.countDocuments(query),
      Mantenimiento.find(query)
        .skip(Number(Desde))
        .limit(Number(Limite)),
    ]);

    // Devolver una respuesta JSON con los datos encontrados
    res.json({
      total,
      datos,
    });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al buscar mantenimientos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para obtener un mantenimiento específico por ID
const BuscarMantenimientoPorID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud

    // Realiza la búsqueda del mantenimiento por ID excluyendo los mantenimientos con estado FALSE
    const mantenimientoEncontrado: Mantenimientos | null =
      await Mantenimiento.findById({
       id
      });
      res.json(mantenimientoEncontrado);

    if (!mantenimientoEncontrado) {
      // Si no se encuentra el mantenimiento, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }

    // Si se encuentra el mantenimiento, lo devuelve en la respuesta JSON
   
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al buscar el mantenimiento por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para actualizar un mantenimiento por ID
const ActualizarMantenimiento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud
    const datosActualizados: Mantenimientos = req.body; // Obtiene los datos actualizados del mantenimiento del cuerpo de la solicitud

    // Verificar si el mantenimiento con el ID dado existe
    const mantenimientoExistente: Mantenimientos | null =
      await Mantenimiento.findOne({
        _id: id,
      });

    if (!mantenimientoExistente) {
      // Si el mantenimiento no se encuentra, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }

    // Actualizar los datos del mantenimiento existente con los nuevos datos
    await Mantenimiento.findOneAndUpdate({ _id: id }, datosActualizados);

    // Devolver un mensaje de éxito
    res.status(200).json({ mensaje: "Mantenimiento actualizado correctamente" });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al actualizar el mantenimiento:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para desactivar un mantenimiento por ID
const DesactivarMantenimiento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud

    // Verificar si el mantenimiento con el ID dado existe
    const mantenimientoExistente = await Mantenimiento.findOne({ _id: id });

    if (!mantenimientoExistente) {
      // Si el mantenimiento no se encuentra, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }

    // Cambiar el estado del mantenimiento a FALSE en lugar de eliminarlo
    await Mantenimiento.findOneAndUpdate({ _id: id }, { ESTADO: false });

    // Devolver un mensaje de éxito
    res.status(200).json({ mensaje: "Mantenimiento desactivado correctamente" });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al desactivar el mantenimiento:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export {
  CrearMantenimiento,
  BuscarMantenimientos,
  BuscarMantenimientoPorID,
  ActualizarMantenimiento,
  DesactivarMantenimiento,
};
