"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espacio = void 0;
const mongoose_1 = require("mongoose");
const EspaciosSchema = new mongoose_1.Schema({
    ESPACIO_ID: {
        type: Number,
        required: [true, 'El ID del espacio es obligatiro'],
        unique: true
    },
    ESPACIO_ESTADO: {
        type: String,
        required: true
    },
    ESTABLECIMIENTO_NOMBRE: {
        type: String,
        required: true
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Espacio = (0, mongoose_1.model)('Espacio', EspaciosSchema);
exports.Espacio = Espacio;
