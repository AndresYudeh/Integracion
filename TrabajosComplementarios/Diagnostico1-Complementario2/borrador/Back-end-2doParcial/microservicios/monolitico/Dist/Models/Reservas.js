"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
const mongoose_1 = require("mongoose");
const ReservaSchema = new mongoose_1.Schema({
    RESERVACION_ID: {
        type: Number,
        required: [true, 'El ID de la reservacion es obligatiro'],
        unique: true
    },
    CLIENTE_CEDULA: {
        type: String,
        required: [true, 'La cedula del cliente es obligatiro'],
    },
    SERVICIO_ID: {
        type: Number,
        required: true
    },
    ESTABLECIMIENTO_ID: {
        type: Number,
        required: true
    },
    RESERVACION_PRECIO: {
        type: Number,
        required: true
    },
    RESERVACION_FECHA: {
        type: String,
        required: true
    },
    RESERVACION_HORA: {
        type: String,
        required: true
    },
    CARRO_PLACA: {
        type: String,
        required: true
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Reserva = (0, mongoose_1.model)('Reserva', ReservaSchema);
exports.Reserva = Reserva;
