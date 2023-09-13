import mongoose  from "mongoose";
import{Schema, model} from "mongoose";
import{Trabajadores} from '../Interfaces';

const TrabajadoresSchema: mongoose.Schema = new Schema<Trabajadores>({

    // TRABAJADOR_ID:{
    //     type: String,
    //     required: [true,'El ID del trabajador es obligatiro'],
    //     unique: true
    // },
    TRABAJADOR_NOMBRE:{
        type: String,
        required: true
    },
    TRABAJADOR_APELLIDO:{
        type: String,
        required: true
    },
    TRABAJADOR_CEDULA:{
        type: String,
        required: [true,'La cedula del trabajador es obligatoria.'],
        unique: true
    },
    TRABAJADOR_TELEFONO:{
        type: String,
        required: true
    },
    TRABAJADOR_CARGO:{
        type: String,
        required: true
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});


const Trabajador: mongoose.Model<Trabajadores> = model<Trabajadores>('Trabajador', TrabajadoresSchema);

export{
    Trabajador
}