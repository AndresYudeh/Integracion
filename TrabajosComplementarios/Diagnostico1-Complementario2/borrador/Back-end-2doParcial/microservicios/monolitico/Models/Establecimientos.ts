import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import { Establecimientos } from '../Interfaces/Establecimientos';

const EstablecimientoSchema: mongoose.Schema = new Schema<Establecimientos>({
    ESTABLECIMIENTO_ID:{
        type: Number,
        required: [true,'El ID del establecimiento es obligatiro'],
        unique: true
    },

    ESTABLECIMIENTO_NOMBRE:{
        type: String,
        required: true
    },

    ESTABLECIMIENTO_DESCRIPCION:{
        type: String
    },

    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});
const Establecimiento: mongoose.Model<Establecimientos> =  model<Establecimientos>('Establecimiento',  EstablecimientoSchema );
export{
    Establecimiento
}
