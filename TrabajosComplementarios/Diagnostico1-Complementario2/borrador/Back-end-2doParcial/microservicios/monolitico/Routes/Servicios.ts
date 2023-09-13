import { Router } from "express";
import {check} from "express-validator";
import {Servicio} from "../Controllers/Index";
import {funciones } from '../Middlewares/Index'

const {obtenerServicios, obtenerServicio, crearServicio, actualizarServicio, borrarServicio}=Servicio

const router=Router()
 
const { validarCampos, validarRepetidoServicios} = funciones

router.get('/' , obtenerServicios)
router.get('/:SERVICIO_NOMBRE', obtenerServicio)

router.post('/', 
[check('SERVICIO_ID', 'El ID del servicio es obligatorio').not().isEmpty(),validarCampos, validarRepetidoServicios] ,
[check('SERVICIO_NOMBRE', 'El Nombre del servicio es obligatorio').not().isEmpty(),validarCampos],
[check('SERVICIO_PRECIO', 'El Precio del servicio es obligatorio').not().isEmpty(),validarCampos],
[check('SERVICIO_TIEMPO', 'El Tiempo que aproximado que dura servicio es obligatorio').not().isEmpty(),validarCampos],
[check('ESTABLECIMIENTO_NOMBRE', 'El Nombre del establecimiento que ofrece el servicio es obligatorio').not().isEmpty(),validarCampos],
crearServicio)

router.put('/:SERVICIO_ID', actualizarServicio)
router.delete('/:SERVICIO_ID', borrarServicio)

export{router}