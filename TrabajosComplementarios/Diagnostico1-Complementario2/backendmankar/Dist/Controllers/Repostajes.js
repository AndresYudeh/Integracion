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
exports.DesactivarRepostaje = exports.ActualizarRepostaje = exports.BuscarRepostajePorID = exports.BuscarRepostajes = exports.CrearRepostaje = void 0;
const models_1 = require("../models");
// Controlador para crear un nuevo repostaje
const CrearRepostaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener los datos del repostaje del cuerpo de la solicitud
        const nuevoRepostaje = req.body;
        // Crear un nuevo repostaje en la base de datos
        const repostajeCreado = yield models_1.Repostaje.create(nuevoRepostaje);
        // Devolver el repostaje creado en la respuesta JSON
        res.status(201).json(repostajeCreado);
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al crear un repostaje:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.CrearRepostaje = CrearRepostaje;
// Controlador para obtener todos los repostajes
const BuscarRepostajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Limite = 10, Desde = 0 } = req.query;
        const query = { ESTADO: true };
        // Usar Promise.all para realizar ambas consultas de manera concurrente
        const [total, datos] = yield Promise.all([
            models_1.Repostaje.countDocuments(query),
            models_1.Repostaje.find(query).skip(Number(Desde)).limit(Number(Limite)),
        ]);
        // Devolver una respuesta JSON con los datos encontrados
        res.json({
            total,
            datos,
        });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al buscar repostajes:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.BuscarRepostajes = BuscarRepostajes;
// Controlador para obtener un repostaje específico por ID
const BuscarRepostajePorID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud
        // Realiza la búsqueda del repostaje por ID excluyendo los repostajes con estado FALSE
        const repostajeEncontrado = yield models_1.Repostaje.findOne({
            _id: id,
            ESTADO: true,
        });
        if (!repostajeEncontrado) {
            // Si no se encuentra el repostaje, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Repostaje no encontrado" });
        }
        // Si se encuentra el repostaje, lo devuelve en la respuesta JSON
        res.json(repostajeEncontrado);
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al buscar el repostaje por ID:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.BuscarRepostajePorID = BuscarRepostajePorID;
// Controlador para actualizar un repostaje por ID
const ActualizarRepostaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud
        const datosActualizados = req.body; // Obtiene los datos actualizados del repostaje del cuerpo de la solicitud
        // Verificar si el repostaje con el ID dado existe
        const repostajeExistente = yield models_1.Repostaje.findOne({
            _id: id,
        });
        if (!repostajeExistente) {
            // Si el repostaje no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Repostaje no encontrado" });
        }
        // Actualizar los datos del repostaje existente con los nuevos datos
        yield models_1.Repostaje.findOneAndUpdate({ _id: id }, datosActualizados);
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Repostaje actualizado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al actualizar el repostaje:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.ActualizarRepostaje = ActualizarRepostaje;
// Controlador para desactivar un repostaje por ID
const DesactivarRepostaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtiene el ID del repostaje de los parámetros de la solicitud
        // Verificar si el repostaje con el ID dado existe
        const repostajeExistente = yield models_1.Repostaje.findOne({ _id: id });
        if (!repostajeExistente) {
            // Si el repostaje no se encuentra, devuelve un mensaje de error
            return res.status(404).json({ mensaje: "Repostaje no encontrado" });
        }
        // Cambiar el estado del repostaje a FALSE en lugar de eliminarlo
        yield models_1.Repostaje.findOneAndUpdate({ _id: id }, { ESTADO: false });
        // Devolver un mensaje de éxito
        res.status(200).json({ mensaje: "Repostaje desactivado correctamente" });
    }
    catch (error) {
        // En caso de error, manejarlo y devolver una respuesta de error
        console.error("Error al desactivar el repostaje:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.DesactivarRepostaje = DesactivarRepostaje;
