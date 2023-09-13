import {Router} from 'express'
import { check } from 'express-validator'
import { Cliente } from '../Controllers/Index'
import {funciones } from '../Middlewares/Index'


const {obtenerClientes, obtenerCliente,  crearCliente, actualizarCliente, borrarCliente} = Cliente;

const router = Router()

const { validarCampos, validarRepetidoClientes} = funciones


router.get('/' , obtenerClientes)
router.get('/:CLIENTE_CEDULA', obtenerCliente)
router.post('/', 
[check('CLIENTE_CEDULA', 'El ingreso de la cedula es obligatoria e irrepetible.').not().isEmpty(),validarCampos, validarRepetidoClientes] ,
[check('CLIENTE_NOMBRE', 'El nombre es obligatorio').not().isEmpty(),validarCampos],
[check('CLIENTE_TELEFONO', 'El número celular es obligatorio').not().isEmpty(),validarCampos],
[check('CLIENTE_CONTRA', 'La contraseña es obligatoria').not().isEmpty(),validarCampos],
crearCliente)

router.put('/:CLIENTE_CEDULA', actualizarCliente)
router.delete('/:CLIENTE_CEDULA', borrarCliente)

export{router}