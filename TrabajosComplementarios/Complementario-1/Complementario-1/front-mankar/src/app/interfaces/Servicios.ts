// Usuarios
export interface RespUsuarios {
  datos(datos: any): unknown;
  usuarios: Usuarios[];
}

export interface Usuarios {
  USUARIO_DNI: number;
  USUARIO_EMAIL: string;
  USUARIO_PASSWORD: string;
  USUARIO_NOMBRE: string;
  ESTADO: boolean;
  UNIDADES_PLACA: string;
  ROL_ID: number;
}

// Unidades
export interface RespUnidades {
  datos(datos: any): unknown;
  unidades: Unidades[];
}

export interface Unidades {
  UNIDADES_PLACA: string;
  UNIDADES_NUMERO: number;
  UNIDADES_COLOR: string;
  UNIDADES_MATRICULA: string;
  UNIDADES_ANO: number;
  ESTADO: boolean;
  ESTABLECIMIENTO_ID: number;
  USUARIO_DNI: number;
}

// TiposMantenimientos
export interface RespTiposMantenimientos {
  datos: any;
  total: number;
  tiposMantenimientos: TiposMantenimientos[];
}

export interface TiposMantenimientos {
  TIPOSMANTE_ID: number;
  TIPOSMANTE_KM: number;
  TIPOMANTE_DESCRIPCION: string;
  ESTADO: boolean;
}

// Rutas
export interface RespRutas {
  rutas: Rutas[];
}

export interface Rutas {
  RUTAS_ID: number;
  RUTAS_DETALLE: string;
  RUTAS_PARTIDA: string;
  RUTAS_LLEGADA: string;
  RUTAS_KMPROM: number;
  ESTADO: boolean;
}

// Roles
export interface RespRoles {
  roles: Roles[];
}

export interface Roles {
  ROL_ID: number;
  ROL_DESCRIPCION: string;
  ESTADO: boolean;
}

// Repostaje
export interface RespRepostajes {
  repostajes: Repostajes[];
  datos: any;
}

export interface Repostajes {
  REPOSTAJE_ID: number;
  REPOSTAJE_KMAC: number;
  REPOSTAJE_COMENTARIO: string;
  ESTADO: boolean;
  UNIDADES_PLACA: string;
  RUTAS_ID: number;
}

// Mantenimientos
export interface RespMantenimientos {
  datos: any;
  mantenimientos: Mantenimientos[];
}

export interface Mantenimientos {
  MANTENIMIENTO_ID: number;
  MANTENIMIENTO_KMAC: number;
  MANTENIMIENTO_KMPROX: number;
  MANTENIMIENTO_COMENTARIO: string;
  MANTENIMIENTO_FECHA: Date;
  MANTENIMIENTO_IMAGEN: string;
  MANTENIMIENTO_IMAGEN2: string;
  ESTADO: boolean;
  UNIDADES_PLACA: string;
  TIPOSMANTE_ID: number;
}

// Establecimientos
export interface RespEstablecimientos {
  establecimientos: Establecimientos[];
}

export interface Establecimientos {
  ESTABLECIMIENTO_ID: number;
  ESTABLECIMIENTO_NOMBRE: string;
  ESTABLECIMIENTO_DESCRIPCION: string;
  ESTADO: boolean;
}
