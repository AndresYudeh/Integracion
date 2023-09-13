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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarTrabajador = exports.actualizarTrabajador = exports.crearTrabajador = exports.obtenerTrabajadores = exports.obtenerTrabajador = void 0;
const Models_1 = require("../Models");
const obtenerTrabajadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, datos] = yield Promise.all([
        Models_1.Trabajador.countDocuments(query),
        Models_1.Trabajador.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json(datos);
});
exports.obtenerTrabajadores = obtenerTrabajadores;
const obtenerTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TRABAJADOR_CEDULA = req.params;
    const trabajador = (yield Models_1.Trabajador.findOne(TRABAJADOR_CEDULA));
    if (!trabajador) {
        return res.status(400).json({ status: 'No es una ID valida >:c' });
    }
    res.json(trabajador);
});
exports.obtenerTrabajador = obtenerTrabajador;
const crearTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
        const TrabajadorExiste = yield Models_1.Trabajador.findOne({ TRABAJADOR_CEDULA: body.TRABAJADOR_CEDULA });
        if (TrabajadorExiste) {
            return res.status(400).json({
                message: `El trabajador ya existe ${TrabajadorExiste.TRABAJADOR_CEDULA}`
            });
        }
        const trabajador = new Models_1.Trabajador(body);
        const TrabajadorNuevo = yield trabajador.save();
        return res.status(201).json(TrabajadorNuevo);
    }
    catch (err) {
        res.json(err);
    }
});
exports.crearTrabajador = crearTrabajador;
const actualizarTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const TrabajadorModificado = yield Models_1.Trabajador.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c' }); });
    res.json(TrabajadorModificado);
});
exports.actualizarTrabajador = actualizarTrabajador;
const borrarTrabajador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const trabajadorBorrado = yield Models_1.Trabajador.findOneAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(trabajadorBorrado);
});
exports.borrarTrabajador = borrarTrabajador;
