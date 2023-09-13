import { Trabajador } from '../Models'
import { Trabajadores } from '../Interfaces'
import { Request, Response } from 'express'

const obtenerTrabajadores = async (req:Request,res:Response) => {

    const { limite =10, desde=0} = req.query;
    const query = { Estado:true };
    const [total, datos]:[Number,Trabajadores[]] = await Promise.all([
        Trabajador.countDocuments(query),
        Trabajador.find(query)
        .skip(Number(desde))

        .limit(Number(limite))
    ])

    res.json(
        datos)
}

const obtenerTrabajador = async (req: Request,res:Response)=>{
    const TRABAJADOR_CEDULA = req.params;
    const trabajador: Trabajadores|null = (await Trabajador.findOne(TRABAJADOR_CEDULA)); 
        if(!trabajador){
            
            return res.status(400).json({status:'No es una ID valida >:c'})
        }
    res.json(trabajador);
}


const crearTrabajador = async (req:Request, res:Response)=>{
    try{
        const {Estado, ...body} = req.body as Trabajadores

    const TrabajadorExiste = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA});
    
    if (TrabajadorExiste){
        return res.status(400).json({
            message:`El trabajador ya existe ${TrabajadorExiste.TRABAJADOR_CEDULA}`
        })
    }
    const trabajador = new Trabajador(body);
    const TrabajadorNuevo = await trabajador.save();
    return res.status(201).json(TrabajadorNuevo);
    }catch (err) {
        res.json(err);
    }
    
}

const actualizarTrabajador = async (req:Request,res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body as Trabajadores;
    const TrabajadorModificado = await Trabajador.findOneAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(TrabajadorModificado);
}


const borrarTrabajador = async (req:Request,res:Response)=>{
    const id  = req.params;
    const trabajadorBorrado = await Trabajador.findOneAndUpdate(id, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(trabajadorBorrado);
}

export{
    obtenerTrabajador,
    obtenerTrabajadores,
    crearTrabajador,
    actualizarTrabajador,
    borrarTrabajador
}