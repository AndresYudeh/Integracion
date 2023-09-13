"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajador = void 0;
const mongoose_1 = require("mongoose");
const TrabajadoresSchema = new mongoose_1.Schema({
    // TRABAJADOR_ID:{
    //     type: String,
    //     required: [true,'El ID del trabajador es obligatiro'],
    //     unique: true
    // },
    TRABAJADOR_NOMBRE: {
        type: String,
        required: true
    },
    TRABAJADOR_APELLIDO: {
        type: String,
        required: true
    },
    TRABAJADOR_CEDULA: {
        type: String,
        required: [true, 'La cedula del trabajador es obligatoria.'],
        unique: true
    },
    TRABAJADOR_TELEFONO: {
        type: String,
        required: true
    },
    TRABAJADOR_CARGO: {
        type: String,
        required: true
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Trabajador = (0, mongoose_1.model)('Trabajador', TrabajadoresSchema);
exports.Trabajador = Trabajador;
