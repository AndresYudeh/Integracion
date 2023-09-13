import mongoose  from "mongoose";
import{Schema, model} from "mongoose"
import{Carros} from '../Interfaces'


const CarrosSchema: mongoose.Schema = new Schema<Carros>({

    CARRO_PLACA:{
        type: String,
        required: [true,'La placa del vehiculo es obligatira'],
        unique: true
    },
    CARRO_MODELO:{
        type: String,
        required: true
    },
    CARRO_ANIO:{
        type: Number,
        required: true
    },
    CARRO_COMENTARIO:{
        type: String,
        required: true
    },
    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }
});


const Carro: mongoose.Model<Carros> = model<Carros>('Carro', CarrosSchema);

export{
    Carro
}