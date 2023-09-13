"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const mongoose_1 = require("mongoose");
const ServiciosSchema = new mongoose_1.Schema({
    SERVICIO_ID: {
        type: Number,
        required: [true, 'El ID del servicio es obligatiro'],
        unique: true
    },
    SERVICIO_NOMBRE: {
        type: String,
        required: true
    },
    SERVICIO_PRECIO: {
        type: Number
    },
    SERVICIO_TIEMPO: {
        type: String
    },
    ESTABLECIMIENTO_NOMBRE: {
        type: String
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Servicio = (0, mongoose_1.model)('Servicio', ServiciosSchema);
exports.Servicio = Servicio;
