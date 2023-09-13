import { Reserva } from "../Models/index";
import { IReservas } from "../Interfaces";
import { Request, Response } from "express";


const ObtenerReservas = async(req:Request,res:Response) =>{
    const { Limite = 10, Desde = 0} = req.query
    const query = {Estado:true};
    const [total, reservaciones]:[Number, IReservas[]] = await Promise.all(
        [
            Reserva.countDocuments(query),
            Reserva.find(query)
            .skip(Number(Desde))
            .limit(Number(Limite))

        ]
    )
    res.json(
        reservaciones
    )
}
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////

const ObtenerReserva = async (req:Request,res:Response)=>{
    const CLIENTE_CEDULA = req.params;
    const { limite =10, desde=0} = req.query;
    const query = CLIENTE_CEDULA;
    const [total, datos] = await Promise.all([
        Reserva.countDocuments(query),
        Reserva.find(query)
    ])
    if(!Reserva.find(query)){
        
        return res.status(400).json({status:'No es una cedula valida, por favor inténtelo de nuevo'})
        
    }
    res.json(datos)
}

const CrearReserva = async (req:Request,res:Response)=>{
    const {Estado, ...body} = req.body as IReservas;

    const ReservaExiste = await Reserva.findOne({
        RESERVACION_ID:body.RESERVACION_ID});

    if (ReservaExiste){
        return res.status(400).json({
            message:`Reserva con ese ID ya existe ${ReservaExiste.RESERVACION_ID}`
        })
    }
    const reserva = new Reserva(body);
    const ReservaNuevo = await reserva.save();
    return res.status(201).json(ReservaNuevo);
}

///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
const ActualizarReserva = async (req:Request,res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body as IReservas;
    const ReservaModificada = await Reserva.findOneAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status: 'No es una ID valida >:c'})});
    res.json(ReservaModificada);
}

///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
const BorrarReserva = async (req:Request,res:Response)=>{
    const id  = req.params;
    const ReservaBorrado = await Reserva.findOneAndDelete(id, {Estado:false}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(ReservaBorrado);
}

export{
    ObtenerReserva,
    ObtenerReservas,
    CrearReserva,
    ActualizarReserva,
    BorrarReserva
}