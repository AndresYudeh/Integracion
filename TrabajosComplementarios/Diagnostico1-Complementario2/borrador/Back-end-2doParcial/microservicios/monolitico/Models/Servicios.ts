import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { Servicios } from "../Interfaces/Servicios";

const ServiciosSchema : mongoose.Schema= new Schema<Servicios>({
    SERVICIO_ID:{
        type: Number,
        required: [true,'El ID del servicio es obligatiro'],
        unique: true
    },

    SERVICIO_NOMBRE:{
        type: String,
        required: true
    },
    SERVICIO_PRECIO:{
        type: Number
    },
    SERVICIO_TIEMPO:{
        type: String
    },
    ESTABLECIMIENTO_NOMBRE: { 
        type: String
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});

const Servicio:mongoose.Model<Servicios> = model<Servicios>('Servicio', ServiciosSchema)

export{Servicio}