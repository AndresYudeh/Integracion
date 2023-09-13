"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Establecimiento = void 0;
const mongoose_1 = require("mongoose");
const EstablecimientoSchema = new mongoose_1.Schema({
    ESTABLECIMIENTO_ID: {
        type: Number,
        required: [true, 'El ID del establecimiento es obligatiro'],
        unique: true
    },
    ESTABLECIMIENTO_NOMBRE: {
        type: String,
        required: true
    },
    ESTABLECIMIENTO_DESCRIPCION: {
        type: String
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Establecimiento = (0, mongoose_1.model)('Establecimiento', EstablecimientoSchema);
exports.Establecimiento = Establecimiento;
