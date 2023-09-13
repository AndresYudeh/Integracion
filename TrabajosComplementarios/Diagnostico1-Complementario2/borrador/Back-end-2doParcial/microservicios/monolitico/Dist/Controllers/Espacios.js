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
exports.BorrarEspacio = exports.ActualizarEspacio = exports.CrearEspacio = exports.ObtenerEspacio = exports.ObtenerEspacios = void 0;
const Models_1 = require("../Models");
const ObtenerEspacios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, espaciox] = yield Promise.all([
        Models_1.Espacio.countDocuments(query),
        Models_1.Espacio.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json(espaciox);
});
exports.ObtenerEspacios = ObtenerEspacios;
const ObtenerEspacio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ESPACIO_ID = req.params;
    const espacio = (yield Models_1.Espacio.findOne(ESPACIO_ID));
    if (!espacio) {
        return res.status(400).json({ status: 'No es una ID valida >:c' });
    }
    res.json(espacio);
});
exports.ObtenerEspacio = ObtenerEspacio;
const CrearEspacio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const espacioExiste = yield Models_1.Espacio.findOne({ ESPACIO_ID: body.ESPACIO_ID });
    if (espacioExiste) {
        res.status(400).json({
            message: `El producto ${body.ESPACIO_ID} ya existe ${espacioExiste.ESPACIO_ID}`
        });
    }
    const producto = new Models_1.Espacio(body);
    const productoNuevo = yield producto.save();
    res.status(201).json(productoNuevo);
});
exports.CrearEspacio = CrearEspacio;
const ActualizarEspacio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const EspacioModificado = yield Models_1.Espacio.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valido', error: err }); });
    res.json(EspacioModificado);
});
exports.ActualizarEspacio = ActualizarEspacio;
const BorrarEspacio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const EspacioBorrado = yield Models_1.Espacio.findOneAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(EspacioBorrado);
});
exports.BorrarEspacio = BorrarEspacio;
