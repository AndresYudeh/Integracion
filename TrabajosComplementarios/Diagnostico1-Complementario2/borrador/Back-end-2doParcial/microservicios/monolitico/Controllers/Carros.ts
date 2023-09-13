import { Carro } from '../Models'
import { Carros } from '../Interfaces'
import { Request, Response } from 'express'


const obtenerCarros = async (req:Request,res:Response) => {
    const { limite ='10', desde='0'} = req.query;
    const query = { Estado:true };
    const [total, carros]:[Number,Carros[]] = await Promise.all([
        Carro.countDocuments(query),
        Carro.find(query)
        .skip(Number(desde))

        .limit(Number(limite))
    ])

    res.json(carros)
}
// Cambio
const obtenerCarro = async (req:Request, res:Response) => {
    const CARRO_PLACA = req.params;
    const carros: Carros | null = (await Carro.findOne(CARRO_PLACA))
    if(!carros){       
        return res.status(400).json({status:'No es una Placa valida >:c'})
    }
    res.json(carros);
}   


const crearCarro = async (req:Request, res:Response)=>{
    const {Estado, ...body} = req.body as Carros

    const CarroExiste = await Carro.findOne({CARRO_PLACA:body.CARRO_PLACA});

    if (CarroExiste){
        res.status(400).json({
            message:`El Carro con esa placa ya existe ${CarroExiste.CARRO_PLACA}`
        })
    }
    const carro = new Carro(body);
    const CarroNuevo = await carro.save();
    res.status(201).json(CarroNuevo);
}

const actualizarCarro = async (req:Request, res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body as Carros;
    const CarroModificado = 
    await Carro.findOneAndUpdate( id,body, { new:true }).catch((err)=>{res.status(400).json({status:'No es una Placa valida >:c', error:err})});
    res.json(CarroModificado);
}


const borrarCarro = async (req:Request, res:Response)=>{
    const id = req.params;
    const CarroBorrado = await Carro.findOneAndUpdate(id, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una Placa valida >:c', error:err})});
    res.json(CarroBorrado);
}

export{
    obtenerCarro,
    obtenerCarros,
    crearCarro,
    actualizarCarro,
    borrarCarro
}