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
exports.borrarEstablecimiento = exports.actualizarEstablecimiento = exports.crearEstablecimiento = exports.obtenerEstablecimiento = exports.obtenerEstablecimientos = void 0;
const Models_1 = require("../Models");
//Controlador para obtener establecimiento
const obtenerEstablecimientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, datos] = yield Promise.all([
        Models_1.Establecimiento.countDocuments(query),
        Models_1.Establecimiento.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json(datos);
});
exports.obtenerEstablecimientos = obtenerEstablecimientos;
//Controlador para obtener un solo establecimiento
const obtenerEstablecimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ESTABLECIMIENTO_NOMBRE = req.params;
    const OBestablecimiento = (yield Models_1.Establecimiento.findOne(ESTABLECIMIENTO_NOMBRE));
    if (!OBestablecimiento) {
        return res.status(400).json({ status: 'No es una ID valida >:c' });
    }
    res.json(OBestablecimiento);
});
exports.obtenerEstablecimiento = obtenerEstablecimiento;
//Controlador para crear establecimiento
const crearEstablecimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
        const EstablecimientoExiste = yield Models_1.Establecimiento.findOne({ ESTABLECIMIENTO_NOMBRE: body.ESTABLECIMIENTO_NOMBRE });
        if (EstablecimientoExiste) {
            return res.status(400).json({
                message: `El Establecimiento con esa placa ya existe ${EstablecimientoExiste.ESTABLECIMIENTO_NOMBRE}`
            });
        }
        const establecimiento = new Models_1.Establecimiento(body);
        const EstablecimientoNuevo = yield establecimiento.save();
        return res.status(201).json(EstablecimientoNuevo);
    }
    catch (err) {
        res.json(err);
    }
});
exports.crearEstablecimiento = crearEstablecimiento;
//Controlador para actualizar establecimiento
const actualizarEstablecimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const EstablecimientoModificado = yield Models_1.Establecimiento.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c' }); });
    res.json(EstablecimientoModificado);
});
exports.actualizarEstablecimiento = actualizarEstablecimiento;
//Controlador para borrar establecimiento
const borrarEstablecimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const EstablecimientoBorrado = yield Models_1.Establecimiento.findOneAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(EstablecimientoBorrado);
});
exports.borrarEstablecimiento = borrarEstablecimiento;
