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
exports.borrarCarro = exports.actualizarCarro = exports.crearCarro = exports.obtenerCarros = exports.obtenerCarro = void 0;
const Models_1 = require("../Models");
const obtenerCarros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = '10', desde = '0' } = req.query;
    const query = { Estado: true };
    const [total, carros] = yield Promise.all([
        Models_1.Carro.countDocuments(query),
        Models_1.Carro.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json(carros);
});
exports.obtenerCarros = obtenerCarros;
// Cambio
const obtenerCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CARRO_PLACA = req.params;
    const carros = (yield Models_1.Carro.findOne(CARRO_PLACA));
    if (!carros) {
        return res.status(400).json({ status: 'No es una Placa valida >:c' });
    }
    res.json(carros);
});
exports.obtenerCarro = obtenerCarro;
const crearCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const CarroExiste = yield Models_1.Carro.findOne({ CARRO_PLACA: body.CARRO_PLACA });
    if (CarroExiste) {
        res.status(400).json({
            message: `El Carro con esa placa ya existe ${CarroExiste.CARRO_PLACA}`
        });
    }
    const carro = new Models_1.Carro(body);
    const CarroNuevo = yield carro.save();
    res.status(201).json(CarroNuevo);
});
exports.crearCarro = crearCarro;
const actualizarCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const CarroModificado = yield Models_1.Carro.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una Placa valida >:c', error: err }); });
    res.json(CarroModificado);
});
exports.actualizarCarro = actualizarCarro;
const borrarCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const CarroBorrado = yield Models_1.Carro.findOneAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una Placa valida >:c', error: err }); });
    res.json(CarroBorrado);
});
exports.borrarCarro = borrarCarro;
