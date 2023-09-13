import { Router } from 'express';
import { check } from 'express-validator';
import { Mantenimiento } from '../Controllers/Index';

const {
  BuscarMantenimientos,
  BuscarMantenimientoPorID,
  CrearMantenimiento,
  ActualizarMantenimiento,
  DesactivarMantenimiento,
} = Mantenimiento;

const router = Router();

router.get('/', BuscarMantenimientos);
router.get('/:_id', BuscarMantenimientoPorID);
router.post(
  '/',
  [
    check('MANTENIMIENTO_KMAC', 'El valor de los kilómetros actuales es obligatorio.').not().isEmpty(),
    check('MANTENIMIENTO_KMPROX', 'El valor de los kilómetros próximos es obligatorio.').not().isEmpty(),
    check('UNIDADES_PLACA', 'La placa de la unidad es obligatoria.').not().isEmpty(),
    check('TIPOSMANTE_ID', 'El ID del tipo de mantenimiento es obligatorio.').not().isEmpty(),
  ],
  CrearMantenimiento
);
router.put('/:_id', ActualizarMantenimiento);
router.delete('/:_id', DesactivarMantenimiento);

export { router };
