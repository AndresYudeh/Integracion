import { Establecimiento } from "../Models"
import { Establecimientos } from '../Interfaces'
import { Request, Response } from 'express';


//Controlador para obtener establecimiento
const obtenerEstablecimientos = async (req: Request, res: Response)=>{
    const { limite =10, desde=0} = req.query
    const query = { Estado:true };
    const [total, datos] : [Number, Establecimientos[]] = await Promise.all([
        Establecimiento.countDocuments(query),
        Establecimiento.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])

res.json(datos)
}

//Controlador para obtener un solo establecimiento
const obtenerEstablecimiento = async (req: Request, res: Response)=>{
    const ESTABLECIMIENTO_NOMBRE = req.params;
    const OBestablecimiento: Establecimientos|null = (await Establecimiento.findOne(ESTABLECIMIENTO_NOMBRE))

    if (!OBestablecimiento) {
        return res.status(400).json({status:'No es una ID valida >:c'})
    }
    res.json(OBestablecimiento);
}

//Controlador para crear establecimiento
const crearEstablecimiento = async (req: Request, res: Response)=>{
    try{
    const {Estado, ...body} = req.body as Establecimientos;

    const EstablecimientoExiste = await Establecimiento.findOne({ESTABLECIMIENTO_NOMBRE:body.ESTABLECIMIENTO_NOMBRE});

    if (EstablecimientoExiste){
        return res.status(400).json({
            message:`El Establecimiento con esa placa ya existe ${EstablecimientoExiste.ESTABLECIMIENTO_NOMBRE}`
        })
    }
    const establecimiento = new Establecimiento(body);
    const EstablecimientoNuevo = await establecimiento.save();
    return res.status(201).json(EstablecimientoNuevo);
    }catch (err) {
        res.json(err);
    }
}

//Controlador para actualizar establecimiento
const actualizarEstablecimiento = async (req: Request, res: Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body as Establecimientos;
    const EstablecimientoModificado = await Establecimiento.findOneAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(EstablecimientoModificado);
}

//Controlador para borrar establecimiento
const borrarEstablecimiento = async (req: Request, res: Response)=>{
    const id = req.params;
    const EstablecimientoBorrado = await Establecimiento.findOneAndUpdate(id, {Estado:false}, {new:true}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(EstablecimientoBorrado);
}

//exportación de controladores desarrollados
export{
    obtenerEstablecimientos,
    obtenerEstablecimiento,
    crearEstablecimiento,
    actualizarEstablecimiento,
    borrarEstablecimiento
}