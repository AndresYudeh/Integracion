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
exports.borrarCliente = exports.actualizarCliente = exports.crearCliente = exports.obtenerCliente = exports.obtenerClientes = void 0;
//Dependecias requeridas
const Models_1 = require("../Models");
//Controlador para obtener clientes
const obtenerClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { Estado: true };
    const [total, datos] = yield Promise.all([
        Models_1.Cliente.countDocuments(query),
        Models_1.Cliente.find(query)
            .skip(Number(Desde))
            .limit(Number(Limite))
    ]);
    res.json(datos);
});
exports.obtenerClientes = obtenerClientes;
//Controlador para obtener un solo cliente
const obtenerCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CLIENTE_CEDULA = req.params;
    const cliente = (yield Models_1.Cliente.findOne(CLIENTE_CEDULA));
    if (!cliente) {
        return res.status(400).json({ status: 'No es una cedula valida.' });
    }
    res.json(cliente);
});
exports.obtenerCliente = obtenerCliente;
//Controlador para crear clientes
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const ClienteExiste = yield Models_1.Cliente.findOne({ CLIENTE_CEDULA: body.CLIENTE_CEDULA });
    if (ClienteExiste) {
        return res.status(400).json({
            message: `El Cliente con el numero de cedula ${ClienteExiste.CLIENTE_CEDULA} ya existe.`
        });
    }
    const cliente = new Models_1.Cliente(body);
    const ClienteNuevo = yield cliente.save();
    return res.status(201).json(ClienteNuevo);
});
exports.crearCliente = crearCliente;
//Controlador para actualizar datos especificos de clientes
const actualizarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const ClienteModificado = yield Models_1.Cliente.findOneAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c' }); });
    res.json(ClienteModificado);
});
exports.actualizarCliente = actualizarCliente;
//Controlador para borrar clientes
const borrarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const ClienteBorrado = yield Models_1.Cliente.findOneAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(ClienteBorrado);
});
exports.borrarCliente = borrarCliente;
