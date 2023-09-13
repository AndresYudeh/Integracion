"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesactivarMantenimiento = exports.ActualizarMantenimiento = exports.BuscarMantenimientoPorID = exports.BuscarMantenimientos = exports.CrearMantenimiento = void 0;
const models_1 = require("../models");
// Controlador para crear un nuevo mantenimientoconst CrearMantenimiento = async (req: Request, res: Response) => {
const CrearMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener los datos del mantenimiento del cuerpo de la solicitud
        const nuevoMantenimiento = req.body;
        // Consultar si ya existe un mantenimiento con el mismo MANTENIMIENTO_ID (si es relevante para tu aplicación)
        const mantenimientoExistente = yield models_1.Mantenimiento.findOne({
            MANTENIMIENTO_ID: nuevoMantenimiento.MANTENIMIENTO_ID,
        });
        if (mantenimientoExistente) {
            // Si ya existe un mantenimiento con el mismo ID, devuelve un mensaje de error
            return res.status(400).json({ error: "El mantenimiento ya existe" });
        }
        // Crear un nuevo mantenimiento en la base de datos
        const mantenimientoCreado = yield models_1.Mantenimiento.create(nuevoMantenimiento);
        // Devolver el mantenimiento creado en la respuesta JSON
        res.status(201).json(mantenimientoCreado);
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al crear un mantenimiento:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.CrearMantenimiento = CrearMantenimiento;
// Controlador para obtener todos los mantenimientos
const BuscarMantenimientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Limite = 10, Desde = 0 } = req.query;
        const query = { ESTADO: true };
        // Usar Promise.all para realizar ambas consultas de manera concurrente
        const [total, datos] = yield Promise.all([
            models_1.Mantenimiento.countDocuments(query),
            models_1.Mantenimiento.find(query)
                .skip(Number(Desde))
                .limit(Number(Limite)),
        ]);
        // Devolver una respuesta JSON con los datos encontrados
        res.json({
            total,
            datos,
        });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al buscar mantenimientos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}); // Controlador para obtener un mantenimiento específico por MANTENIMIENTO_ID
exports.BuscarMantenimientos = BuscarMantenimientos;
/* const BuscarMantenimientoPorID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtiene el MANTENIMIENTO_ID del mantenimiento de los parámetros de la solicitud

    // Realiza la búsqueda del mantenimiento por MANTENIMIENTO_ID excluyendo los mantenimientos con estado FALSE
    const mantenimientoEncontrado: Mantenimientos | null =
      await Mantenimiento.findOne({
        MANTENIMIENTO_ID: id,
        ESTADO: true,
      });

    if (!mantenimientoEncontrado) {
      // Si no se encuentra el mantenimiento, devuelve un mensaje de error
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }

    // Si se encuentra el mantenimiento, lo devuelve en la respuesta JSON
    res.json(mantenimientoEncontrado);

  } catch (error) {
    // En caso de error, manejarlo y devolver una respuesta de error
    console.error("Error al buscar el mantenimiento por MANTENIMIENTO_ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}; */
const BuscarMantenimientoPorID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener el MANTENIMIENTO_ID de los parámetros de la solicitud
        const { MANTENIMIENTO_ID } = req.params;
        // Buscar el mantenimiento por MANTENIMIENTO_ID en la base de datos
        const mantenimiento = yield models_1.Mantenimiento.findOne({
            MANTENIMIENTO_ID: Number(MANTENIMIENTO_ID),
        });
        if (!mantenimiento) {
            // Si no se encuentra el mantenimiento, devuelve un mensaje de error
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        }
        // Devolver el mantenimiento encontrado en la respuesta JSON
        res.status(200).json(mantenimiento);
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error('Error al buscar un mantenimiento por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.BuscarMantenimientoPorID = BuscarMantenimientoPorID;
const ActualizarMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { MANTENIMIENTO_ID } = req.params; // Obtiene el MANTENIMIENTO_ID del mantenimiento de los parámetros de la solicitud
        const datosActualizados = req.body; // Obtiene los datos actualizados del mantenimiento del cuerpo de la solicitud
        // Verificar si el mantenimiento con el MANTENIMIENTO_ID dado existe
        const mantenimientoExistente = yield models_1.Mantenimiento.findOne({
            MANTENIMIENTO_ID: Number(MANTENIMIENTO_ID),
        });
        if (!mantenimientoExistente) {
            // Si el mantenimiento no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
        }
        // Actualizar los datos del mantenimiento existente con los nuevos datos
        yield models_1.Mantenimiento.findOneAndUpdate({ MANTENIMIENTO_ID: Number(MANTENIMIENTO_ID) }, datosActualizados);
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Mantenimiento actualizado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al actualizar el mantenimiento por MANTENIMIENTO_ID:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.ActualizarMantenimiento = ActualizarMantenimiento;
// Controlador para desactivar un mantenimiento por MANTENIMIENTO_ID
const DesactivarMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { MANTENIMIENTO_ID } = req.params; // Obtiene el MANTENIMIENTO_ID del mantenimiento de los parámetros de la solicitud
        // Verificar si el mantenimiento con el MANTENIMIENTO_ID dado existe
        const mantenimientoExistente = yield models_1.Mantenimiento.findOne({
            MANTENIMIENTO_ID: Number(MANTENIMIENTO_ID),
        });
        if (!mantenimientoExistente) {
            // Si el mantenimiento no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
        }
        // Cambiar el estado del mantenimiento a FALSE en lugar de eliminarlo
        yield models_1.Mantenimiento.findOneAndUpdate({ MANTENIMIENTO_ID: Number(MANTENIMIENTO_ID) }, { ESTADO: false });
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Mantenimiento desactivado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al desactivar el mantenimiento por MANTENIMIENTO_ID:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.DesactivarMantenimiento = DesactivarMantenimiento;
