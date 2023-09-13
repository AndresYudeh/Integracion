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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
//import express, {Router, Express} from "express";
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const Config_1 = require("./Database/Config");
/*aqui declaramos individualmente las rutas
con las misma estructura pero el nombre RutasCarro deben cambiarlos*/
const Carros_1 = require("./Routes/Carros");
const Clientes_1 = require("./Routes/Clientes");
const Espacios_1 = require("./Routes/Espacios");
const Establecimientos_1 = require("./Routes/Establecimientos");
const Reservas_1 = require("./Routes/Reservas");
const Servicios_1 = require("./Routes/Servicios");
class Server {
    constructor() {
        this.app = (0, express_1.Router)();
        this.router = (0, express_1.Router)();
        this.port = Number(process.env["PORT"]);
        //aqui deben ir los path de cada modelo
        this.paths = {
            carros: '/api/carros',
            clientes: '/api/clientes',
            espacios: '/api/espacios',
            establecimientos: '/api/establecimientos',
            reservas: '/api/reservas',
            servicios: '/api/servicios',
            trabajadores: '/api/trabajadores'
        };
        this.conectarDb();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa', this.app);
        this._express = (0, express_1.default)().use(this.router);
    }
    conectarDb() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, Config_1.dbConection)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.carros, Carros_1.router);
        this.app.use(this.paths.clientes, Clientes_1.router);
        this.app.use(this.paths.espacios, Espacios_1.router);
        this.app.use(this.paths.establecimientos, Establecimientos_1.router);
        this.app.use(this.paths.reservas, Reservas_1.router);
        this.app.use(this.paths.servicios, Servicios_1.router);
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}/v1/sextoa`);
        });
    }
}
exports.Server = Server;
