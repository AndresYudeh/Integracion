 import { Router } from "express";
 import {check} from "express-validator";
 import {Reserva} from "../Controllers/Index";
 import {funciones } from '../Middlewares/Index'

 
const {CrearReserva,ObtenerReserva,ObtenerReservas,ActualizarReserva,BorrarReserva}=Reserva
 
const router=Router()

const { validarCampos, validarRepetidoReservas} = funciones

 
router.get('/' , ObtenerReservas)
router.get('/:CLIENTE_CEDULA', ObtenerReserva)
router.post('/', 
[check('RESERVACION_ID', 'El ingreso del ID de la reserva es obligatoria e irrepetible.').not().isEmpty(),validarCampos, validarRepetidoReservas] ,
[check('CLIENTE_CEDULA', 'La cedula del cliente es obligatoria.').not().isEmpty(),validarCampos],
[check('SERVICIO_ID', 'La ID del servicio es obligatoria.').not().isEmpty(),validarCampos],
[check('ESTABLECIMIENTO_ID', 'La ID del establecimiento es obligatoria.').not().isEmpty(),validarCampos],
[check('RESERVACION_PRECIO', 'Ubicar el precio de la reservacion es obligatorio.').not().isEmpty(),validarCampos],
[check('RESERVACION_FECHA', 'La fecha de la fecha de la reservacion es obligatoria.').not().isEmpty(),validarCampos],
[check('RESERVACION_HORA', 'La hora de la reservacion es obligatoria.').not().isEmpty(),validarCampos],
[check('CARRO_PLACA', 'La placa del vehiculo es obligatoria.').not().isEmpty(),validarCampos],
CrearReserva)


router.put('/:RESERVACION_ID', ActualizarReserva)
router.delete('/:RESERVACION_ID', BorrarReserva)
export {router}