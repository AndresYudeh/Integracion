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
exports.BorrarReserva = exports.ActualizarReserva = exports.CrearReserva = exports.ObtenerReservas = exports.ObtenerReserva = void 0;
const index_1 = require("../Models/index");
const ObtenerReservas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, reservaciones] = yield Promise.all([
        index_1.Reserva.countDocuments(query),
        index_1.Reserva.find(query)
            .skip(Number(Desde))
            .limit(Number(Limite))
    ]);
    res.json(reservaciones);
});
exports.ObtenerReservas = ObtenerReservas;
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
const ObtenerReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CLIENTE_CEDULA = req.params;
    const { limite = 10, desde = 0 } = req.query;
    const query = CLIENTE_CEDULA;
    const [total, datos] = yield Promise.all([
        index_1.Reserva.countDocuments(query),
        index_1.Reserva.find(query)
    ]);
    if (!index_1.Reserva.find(query)) {
        return res.status(400).json({ status: 'No es una cedula valida, por favor inténtelo de nuevo' });
    }
    res.json(datos);
});
exports.ObtenerReserva = ObtenerReserva;
const CrearReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const ReservaExiste = yield index_1.Reserva.findOne({
        RESERVACION_ID: body.RESERVACION_ID
    });
    if (ReservaExiste) {
        return res.status(400).json({
            message: `Reserva con ese ID ya existe ${ReservaExiste.RESERVACION_ID}`
        });
    }
    const reserva = new index_1.Reserva(body);
    const ReservaNuevo = yield reserva.save();
    return res.status(201).json(ReservaNuevo);
});
exports.CrearReserva = CrearReserva;
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
const ActualizarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const ReservaModificada = yield index_1.Reserva.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c' }); });
    res.json(ReservaModificada);
});
exports.ActualizarReserva = ActualizarReserva;
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
const BorrarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const ReservaBorrado = yield index_1.Reserva.findOneAndDelete(id, { Estado: false }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(ReservaBorrado);
});
exports.BorrarReserva = BorrarReserva;
