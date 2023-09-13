import {Router} from 'express'
import {check} from 'express-validator'
import { Trabajador } from '../Controllers/Index'
import {funciones } from '../Middlewares/Index'


const { obtenerTrabajador, obtenerTrabajadores, crearTrabajador, actualizarTrabajador, borrarTrabajador} = Trabajador;

const router = Router()
const { validarCampos, validarRepetidoTrabajadores} = funciones


router.get('/' , obtenerTrabajadores)
router.get('/:TRABAJADOR_CEDULA', obtenerTrabajador)
router.post('/', 
[check('TRABAJADOR_CEDULA', 'El ingreso de la cedula es obligatoria e irrepetible.').not().isEmpty(),validarCampos, validarRepetidoTrabajadores] ,
[check('TRABAJADOR_NOMBRE', 'El nombre es obligatorio').not().isEmpty(),validarCampos],
[check('TRABAJADOR_APELLIDO', 'El apellido es obligatorio').not().isEmpty(),validarCampos],
[check('TRABAJADOR_TELEFONO', 'El número celular es obligatorio').not().isEmpty(),validarCampos],
[check('TRABAJADOR_CARGO', 'El cargo del trabajador es obligatorio').not().isEmpty(),validarCampos],
crearTrabajador)
router.put('/:TRABAJADOR_CEDULA', actualizarTrabajador)
router.delete('/:TRABAJADOR_CEDULA', borrarTrabajador)

export{router}