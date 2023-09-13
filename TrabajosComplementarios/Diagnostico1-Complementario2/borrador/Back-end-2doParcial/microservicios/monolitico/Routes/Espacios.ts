import {Router} from 'express';
import { check } from 'express-validator';
import { Espacio } from '../Controllers/Index';
import {funciones } from '../Middlewares/Index'

const {ObtenerEspacios, ObtenerEspacio, CrearEspacio, ActualizarEspacio, BorrarEspacio} = Espacio

const router = Router()

const { validarCampos, validarRepetidoEspacios} = funciones

router.get('/' , ObtenerEspacios)
router.get('/:ESPACIO_ID', ObtenerEspacio)
router.post('/', 
[check('ESPACIO_ID', 'El ID del espacio es obligatorio y no se puede repetir').not().isEmpty(),validarCampos, validarRepetidoEspacios] ,
[check('ESPACIO_ESTADO', 'El Estado del espacio es obligatorio').not().isEmpty(),validarCampos],
[check('ESTABLECIMIENTO_NOMBRE', 'El Nombre del establecimiento que ofrece el espacio es obligatorio').not().isEmpty(),validarCampos],
CrearEspacio)
router.put('/:ESPACIO_ID', ActualizarEspacio)
router.delete('/:ESPACIO_ID', BorrarEspacio)

export{router}