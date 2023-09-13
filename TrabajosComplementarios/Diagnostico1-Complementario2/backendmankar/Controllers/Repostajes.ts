import { Repostajes } from "../Interfaces";
import { Request, Response } from "express";
import { Repostaje } from "../models";

// Controlador para crear un nuevo repostaje
const CrearRepostaje = async (req: Request, res: Response) => {
  try {
    // Obtener los datos del repostaje del cuerpo de la solicitud
    const nuevoRepostaje: Repostajes = req.body;

    // Crear un nuevo repostaje en la base de datos
    const repostajeCreado: Repostajes = await Repostaje.create(nuevoRepostaje);

    // Devolver el repostaje creado en la respuesta JSON
    res.status(201).json(repostajeCreado);
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al crear un repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para obtener todos los repostajes
const BuscarRepostajes = async (req: Request, res: Response) => {
  try {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { ESTADO: true };

    // Usar Promise.all para realizar ambas consultas de manera concurrente
    const [total, datos]: [number, Repostajes[]] = await Promise.all([
      Repostaje.countDocuments(query),
      Repostaje.find(query).skip(Number(Desde)).limit(Number(Limite)),
    ]);

    // Devolver una respuesta JSON con los datos encontrados
    res.json({
      total,
      datos,
    });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al buscar repostajes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para obtener un repostaje específico por ID
const BuscarRepostajePorID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud

    // Realiza la búsqueda del repostaje por ID excluyendo los repostajes con estado FALSE
    const repostajeEncontrado: Repostajes | null = await Repostaje.findOne({
      _id: id,
      ESTADO: true,
    });

    if (!repostajeEncontrado) {
      // Si no se encuentra el repostaje, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }

    // Si se encuentra el repostaje, lo devuelve en la respuesta JSON
    res.json(repostajeEncontrado);
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al buscar el repostaje por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para actualizar un repostaje por ID
const ActualizarRepostaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud
    const datosActualizados: Repostajes = req.body; // Obtiene los datos actualizados del repostaje del cuerpo de la solicitud

    // Verificar si el repostaje con el ID dado existe
    const repostajeExistente: Repostajes | null = await Repostaje.findOne({
      _id: id,
    });

    if (!repostajeExistente) {
      // Si el repostaje no se encuentra, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }

    // Actualizar los datos del repostaje existente con los nuevos datos
    await Repostaje.findOneAndUpdate({ _id: id }, datosActualizados);

    // Devolver un mensaje de éxito
    res.status(200).json({ mensaje: "Repostaje actualizado correctamente" });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al actualizar el repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para desactivar un repostaje por ID
const DesactivarRepostaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud

    // Verificar si el repostaje con el ID dado existe
    const repostajeExistente = await Repostaje.findOne({ _id: id });

    if (!repostajeExistente) {
      // Si el repostaje no se encuentra, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }

    // Cambiar el estado del repostaje a FALSE en lugar de eliminarlo
    await Repostaje.findOneAndUpdate({ _id: id }, { ESTADO: false });

    // Devolver un mensaje de éxito
    res.status(200).json({ mensaje: "Repostaje desactivado correctamente" });
  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al desactivar el repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export {
  CrearRepostaje,
  BuscarRepostajes,
  BuscarRepostajePorID,
  ActualizarRepostaje,
  DesactivarRepostaje,
};
