import{ NextFunction, Request, Response } from 'express'
import{validationResult, } from 'express-validator'
import {Trabajadores} from '../Interfaces'
import {Trabajador} from '../Models'
import {check} from "express-validator";



const validarRepetidoTrabajadores = async (req: Request, res: Response, next: NextFunction)=>{
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
}


const validarCampos = (req: Request, res: Response, next: NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}


export{validarCampos, validarRepetidoTrabajadores}