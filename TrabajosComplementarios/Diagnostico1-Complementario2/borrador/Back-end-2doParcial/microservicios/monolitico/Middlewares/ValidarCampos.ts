import{ NextFunction, Request, Response } from 'express'
import{validationResult, } from 'express-validator'
import { Servicios, IEspacios, Carros, Clientes, IReservas} from '../Interfaces'
import { Servicio, Espacio, Carro, Cliente, Reserva} from '../Models'
import {check} from "express-validator";

/*PENDIENTE DE SOLUCIONAR PARA VERIFICAR QUE NO SE REPITAN LOS ID*/
const validarRepetidoServicios = async (req: Request, res: Response, next: NextFunction)=>{
        const {Estado, ...body} = req.body as Servicios;
        const servicioExiste = await Servicio.findOne({SERVICIO_ID:body.SERVICIO_ID}); 
        if (servicioExiste){
            res.status(400).json({
                message:`El servicio ${body.SERVICIO_ID} ya existe`
            })
        }
        if(!servicioExiste){
            next() 
        }
}
const validarRepetidoEspacios = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as IEspacios;
    const espacioExiste = await Espacio.findOne({ESPACIO_ID:body.ESPACIO_ID}); 
    if (espacioExiste){
        res.status(400).json({
            message:`El espacio ${body.ESPACIO_ID} ya existe`
        })
    }
    if(!espacioExiste){
        next() 
    }
}
const validarRepetidoCarros = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as Carros;
    const carroExiste = await Carro.findOne({CARRO_PLACA:body.CARRO_PLACA}); 
    if (carroExiste){
        res.status(400).json({
            message:`El carro con la placa ${body.CARRO_PLACA} ya existe`
        })
    }
    if(!carroExiste){
        next() 
    }
}

const validarRepetidoClientes = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as Clientes;
    const clienteExiste = await Cliente.findOne({CLIENTE_CEDULA:body.CLIENTE_CEDULA}); 
    if (clienteExiste){
        res.status(400).json({
            message:`El cliente con el número de cedula ${body.CLIENTE_CEDULA} ya existe.`
        })
    }
    if(!clienteExiste){
        next() 
    }
}

/* const validarRepetidoTrabajadores = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as Trabajadores;
    const trabajadorExiste = await Trabajador.findOne({TRABAJADOR_CEDULA:body.TRABAJADOR_CEDULA}); 
    if (trabajadorExiste){
        res.status(400).json({
            message:`El trabajador con el número de cedula ${body.TRABAJADOR_CEDULA} ya existe.`
        })
    }
    if(!trabajadorExiste){
        next() 
    }
} */

const validarRepetidoReservas = async (req: Request, res: Response, next: NextFunction)=>{
    const {Estado, ...body} = req.body as IReservas;
    const reservaExiste = await Reserva.findOne({RESERVACION_ID:body.RESERVACION_ID}); 
    if (reservaExiste){
        res.status(400).json({
            message:`La reserva con el ID ${body.RESERVACION_ID} ya existe.`
        })
    }
    if(!reservaExiste){
        next() 
    }
}




const validarCampos = (req: Request, res: Response, next: NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}


// const obtenerServicio = async (req:Request,res:Response)=>{
//     const SERVICIO_NOMBRE = req.params;
//     const servicio: Servicios | null = (await Servicio.findOne(SERVICIO_NOMBRE));
//     if(!servicio){
//         return res.status(400).json({status:'No es un nombre de servicio válico, por favor inténtelo de nuevo'})
//     }
//     res.json({servicio, msg: SERVICIO_NOMBRE});
// }

export{validarCampos, validarRepetidoServicios, validarRepetidoEspacios,validarRepetidoCarros, validarRepetidoClientes, validarRepetidoReservas}