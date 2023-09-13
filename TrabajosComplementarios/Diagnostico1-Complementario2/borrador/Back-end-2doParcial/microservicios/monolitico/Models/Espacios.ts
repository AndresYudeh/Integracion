import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import {IEspacios} from '../Interfaces'
const EspaciosSchema: mongoose.Schema = new Schema<IEspacios>({
    ESPACIO_ID:{
        type: Number,
        required: [true,'El ID del espacio es obligatiro'],
        unique: true
    },

    ESPACIO_ESTADO:{
        type: String,
        required: true
    },

    ESTABLECIMIENTO_NOMBRE:{
        type: String,
        required: true
    },

    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }

});

const Espacio: mongoose.Model<IEspacios> =  model<IEspacios>('Espacio',  EspaciosSchema );

export{
    Espacio
}
