import {Router} from 'express';
import { check } from 'express-validator';
import { Establecimiento } from '../Controllers/Index';

const { obtenerEstablecimientos,
        obtenerEstablecimiento,
        crearEstablecimiento,
        actualizarEstablecimiento,
        borrarEstablecimiento} = Establecimiento;

const router = Router();

router.get('/' , obtenerEstablecimientos)
router.get('/:ESTABLECIMIENTO_NOMBRE', obtenerEstablecimiento)
router.post('/', [check('id', 'ID es obligatorio').not().isEmpty()], crearEstablecimiento)
router.put('/:ESTABLECIMIENTO_ID', actualizarEstablecimiento)
router.delete('/:ESTABLECIMIENTO_ID', borrarEstablecimiento)

export{router}