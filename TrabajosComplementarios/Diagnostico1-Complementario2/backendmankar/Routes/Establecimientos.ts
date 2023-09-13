import { Router } from 'express';
import { check } from 'express-validator';
import { Establecimiento } from '../Controllers/Index';

const {
  BuscarEstablecimientos,
  BuscarEstablecimientoPorID,
  CrearEstablecimiento,
  ActualizarEstablecimiento,
  DesactivarEstablecimiento,
} = Establecimiento;

const router = Router();

router.get('/', BuscarEstablecimientos);
router.get('/:_id', BuscarEstablecimientoPorID);
router.post(
  '/',
  [
    check('ESTABLECIMIENTO_NOMBRE', 'El nombre del establecimiento es obligatorio.').not().isEmpty(),
    check('ESTABLECIMIENTO_DESCRIPCION', 'La descripción del establecimiento es obligatoria.').not().isEmpty(),
  ],
  CrearEstablecimiento
);
router.put('/:_id', ActualizarEstablecimiento);
router.delete('/:_id', DesactivarEstablecimiento);

export { router };
