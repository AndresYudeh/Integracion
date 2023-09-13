"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const mongoose_1 = require("mongoose");
const CarrosSchema = new mongoose_1.Schema({
    CARRO_PLACA: {
        type: String,
        required: [true, 'La placa del vehiculo es obligatira'],
        unique: true
    },
    CARRO_MODELO: {
        type: String,
        required: true
    },
    CARRO_ANIO: {
        type: Number,
        required: true
    },
    CARRO_COMENTARIO: {
        type: String,
        required: true
    },
    Estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Carro = (0, mongoose_1.model)('Carro', CarrosSchema);
exports.Carro = Carro;
