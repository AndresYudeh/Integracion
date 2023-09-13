import {Router} from 'express'
import {check} from 'express-validator'
import { Carro } from '../Controllers/Index'
import {funciones } from '../Middlewares/Index'

const { obtenerCarro, obtenerCarros, crearCarro, actualizarCarro, borrarCarro} = Carro

const router = Router();

const { validarCampos, validarRepetidoCarros} = funciones

router.get('/' , obtenerCarros)
router.get('/:CARRO_PLACA', obtenerCarro)
router.post('/',
[check('CARRO_PLACA', 'La placa del vehículo es obligatorio y no se debe repetir').not().isEmpty(),validarCampos, validarRepetidoCarros] ,
[check('CARRO_MODELO', 'El modelo del vehículo es obligatorio').not().isEmpty(),validarCampos],
[check('CARRO_ANIO', 'El año del vehículo es obligatorio').not().isEmpty(),validarCampos],
[check('CARRO_COMENTARIO', 'Añadir un comentario u observación adicional es obligatorio').not().isEmpty(),validarCampos],
crearCarro)
router.put('/:CARRO_PLACA', actualizarCarro)
router.delete('/:CARRO_PLACA', borrarCarro)

export{router}