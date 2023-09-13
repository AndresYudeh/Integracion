"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Establecimiento = exports.Servicio = exports.Espacio = exports.Carro = exports.Reserva = exports.Cliente = void 0;
const Carro = __importStar(require("./Carros"));
exports.Carro = Carro;
const Cliente = __importStar(require("./Clientes"));
exports.Cliente = Cliente;
const Espacio = __importStar(require("./Espacios"));
exports.Espacio = Espacio;
const Reserva = __importStar(require("./Reservas"));
exports.Reserva = Reserva;
const Servicio = __importStar(require("./Servicios"));
exports.Servicio = Servicio;
const Establecimiento = __importStar(require("./Establecimientos"));
exports.Establecimiento = Establecimiento;
