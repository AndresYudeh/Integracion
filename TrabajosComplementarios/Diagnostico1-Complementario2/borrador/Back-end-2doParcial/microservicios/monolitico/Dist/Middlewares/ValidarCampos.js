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
exports.validarRepetidoReservas = exports.validarRepetidoClientes = exports.validarRepetidoCarros = exports.validarRepetidoEspacios = exports.validarRepetidoServicios = exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const Models_1 = require("../Models");
/*PENDIENTE DE SOLUCIONAR PARA VERIFICAR QUE NO SE REPITAN LOS ID*/
const validarRepetidoServicios = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const servicioExiste = yield Models_1.Servicio.findOne({ SERVICIO_ID: body.SERVICIO_ID });
    if (servicioExiste) {
        res.status(400).json({
            message: `El servicio ${body.SERVICIO_ID} ya existe`
        });
    }
    if (!servicioExiste) {
        next();
    }
});
exports.validarRepetidoServicios = validarRepetidoServicios;
const validarRepetidoEspacios = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const espacioExiste = yield Models_1.Espacio.findOne({ ESPACIO_ID: body.ESPACIO_ID });
    if (espacioExiste) {
        res.status(400).json({
            message: `El espacio ${body.ESPACIO_ID} ya existe`
        });
    }
    if (!espacioExiste) {
        next();
    }
});
exports.validarRepetidoEspacios = validarRepetidoEspacios;
const validarRepetidoCarros = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _c = req.body, { Estado } = _c, body = __rest(_c, ["Estado"]);
    const carroExiste = yield Models_1.Carro.findOne({ CARRO_PLACA: body.CARRO_PLACA });
    if (carroExiste) {
        res.status(400).json({
            message: `El carro con la placa ${body.CARRO_PLACA} ya existe`
        });
    }
    if (!carroExiste) {
        next();
    }
});
exports.validarRepetidoCarros = validarRepetidoCarros;
const validarRepetidoClientes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _d = req.body, { Estado } = _d, body = __rest(_d, ["Estado"]);
    const clienteExiste = yield Models_1.Cliente.findOne({ CLIENTE_CEDULA: body.CLIENTE_CEDULA });
    if (clienteExiste) {
        res.status(400).json({
            message: `El cliente con el número de cedula ${body.CLIENTE_CEDULA} ya existe.`
        });
    }
    if (!clienteExiste) {
        next();
    }
});
exports.validarRepetidoClientes = validarRepetidoClientes;
/* const validarRepetidoTrabajadores = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as Trabajadores;
    const trabajadorExiste = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA});
    if (trabajadorExiste){
        res.status(400).json({
            message:`El trabajador con el número de cedula ${body.TRABAJADOR_CEDULA} ya existe.`
        })
    }
    if(!trabajadorExiste){
        next()
    }
} */
const validarRepetidoReservas = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _e = req.body, { Estado } = _e, body = __rest(_e, ["Estado"]);
    const reservaExiste = yield Models_1.Reserva.findOne({ RESERVACION_ID: body.RESERVACION_ID });
    if (reservaExiste) {
        res.status(400).json({
            message: `La reserva con el ID ${body.RESERVACION_ID} ya existe.`
        });
    }
    if (!reservaExiste) {
        next();
    }
});
exports.validarRepetidoReservas = validarRepetidoReservas;
const validarCampos = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampos = validarCampos;
