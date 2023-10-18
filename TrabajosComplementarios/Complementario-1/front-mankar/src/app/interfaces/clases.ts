// Usuarios
export class Usuarios {
  constructor(
    public USUARIO_DNI: number,
    public USUARIO_EMAIL: string,
    public USUARIO_PASSWORD: string,
    public USUARIO_NOMBRE: string,
    public ESTADO: boolean,
    public UNIDADES_PLACA: string,
    public ROL_ID: number,
  ) {}
}

// Unidades
export class Unidades {
  constructor(
    public UNIDADES_PLACA: string,
    public UNIDADES_NUMERO: number,
    public UNIDADES_COLOR: string,
    public UNIDADES_MATRICULA: string,
    public UNIDADES_ANO: number,
    public ESTADO: boolean,
    public ESTABLECIMIENTO_ID: number,
    public USUARIO_DNI: number,
  ) {}
}

// TiposMantenimientos
export class TiposMantenimientos {
  constructor(
    public TIPOSMANTE_ID: number,
    public TIPOSMANTE_KM: number,
    public TIPOMANTE_DESCRIPCION: string,
    public ESTADO: boolean,
  ) {}
}

// Rutas
export class Rutas {
  constructor(
    public RUTAS_ID: number,
    public RUTAS_DETALLE: string,
    public RUTAS_PARTIDA: string,
    public RUTAS_LLEGADA: string,
    public RUTAS_KMPROM: number,
    public ESTADO: boolean,
  ) {}
}

// Roles
export class Roles {
  constructor(
    public ROL_ID: number,
    public ROL_DESCRIPCION: string,
    public ESTADO: boolean,
  ) {}
}

// Repostaje
export class Repostajes {
  constructor(
    public REPOSTAJE_ID: number,
    public REPOSTAJE_KMAC: number,
    public REPOSTAJE_COMENTARIO: string,
    public ESTADO: boolean,
    public UNIDADES_PLACA: string,
    public RUTAS_ID: number,
  ) {}
}

// Mantenimientos
export class Mantenimientos {
  constructor(
    public MANTENIMIENTO_ID: number,
    public MANTENIMIENTO_KMAC: number,
    public MANTENIMIENTO_KMPROX: number,
    public MANTENIMIENTO_COMENTARIO: string,
    public MANTENIMIENTO_FECHA: Date,
    public MANTENIMIENTO_IMAGEN: string,
    public MANTENIMIENTO_IMAGEN2: string,
    public ESTADO: boolean,
    public UNIDADES_PLACA: string,
    public TIPOSMANTE_ID: number,
  ) {}
}

// Establecimientos
export class Establecimientos {
  constructor(
    public ESTABLECIMIENTO_ID: number,
    public ESTABLECIMIENTO_NOMBRE: string,
    public ESTABLECIMIENTO_DESCRIPCION: string,
    public ESTADO: boolean,
  ) {}
}
