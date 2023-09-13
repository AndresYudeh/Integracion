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
// Controlador para crear un nuevo mantenimiento
const CrearMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener los datos del mantenimiento del cuerpo de la solicitud
        const nuevoMantenimiento = req.body;
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
});
exports.BuscarMantenimientos = BuscarMantenimientos;
// Controlador para obtener un mantenimiento específico por ID
const BuscarMantenimientoPorID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud
        // Realiza la búsqueda del mantenimiento por ID excluyendo los mantenimientos con estado FALSE
        const mantenimientoEncontrado = yield models_1.Mantenimiento.findById({
            _id: id,
            ESTADO: true,
        });
        res.json(mantenimientoEncontrado);
        if (!mantenimientoEncontrado) {
            // Si no se encuentra el mantenimiento, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
        }
        // Si se encuentra el mantenimiento, lo devuelve en la respuesta JSON
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al buscar el mantenimiento por ID:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.BuscarMantenimientoPorID = BuscarMantenimientoPorID;
// Controlador para actualizar un mantenimiento por ID
const ActualizarMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud
        const datosActualizados = req.body; // Obtiene los datos actualizados del mantenimiento del cuerpo de la solicitud
        // Verificar si el mantenimiento con el ID dado existe
        const mantenimientoExistente = yield models_1.Mantenimiento.findOne({
            _id: id,
        });
        if (!mantenimientoExistente) {
            // Si el mantenimiento no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
        }
        // Actualizar los datos del mantenimiento existente con los nuevos datos
        yield models_1.Mantenimiento.findOneAndUpdate({ _id: id }, datosActualizados);
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Mantenimiento actualizado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al actualizar el mantenimiento:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.ActualizarMantenimiento = ActualizarMantenimiento;
// Controlador para desactivar un mantenimiento por ID
const DesactivarMantenimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del mantenimiento de los parámetros de la solicitud
        // Verificar si el mantenimiento con el ID dado existe
        const mantenimientoExistente = yield models_1.Mantenimiento.findOne({ _id: id });
        if (!mantenimientoExistente) {
            // Si el mantenimiento no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
        }
        // Cambiar el estado del mantenimiento a FALSE en lugar de eliminarlo
        yield models_1.Mantenimiento.findOneAndUpdate({ _id: id }, { ESTADO: false });
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Mantenimiento desactivado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al desactivar el mantenimiento:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.DesactivarMantenimiento = DesactivarMantenimiento;
