export interface RespServicios{
    servicios: Servicios[];
}
export class Servicios{
    constructor(
        public SERVICIO_ID:number,
        public SERVICIO_NOMBRE:string,
        public SERVICIO_PRECIO:number,
        public SERVICIO_TIEMPO:string,
        public ESTABLECIMIENTO_NOMBRE:string
    ){}
}
export class Reservas{
    constructor(
        public RESERVACION_ID:number,
        public CLIENTE_CEDULA:string,
        public SERVICIO_ID:number,
        public ESTABLECIMIENTO_ID:number,
        public RESERVACION_PRECIO:number,
        public RESERVACION_FECHA:string,
        public RESERVACION_HORA:string,
        public CARRO_PLACA:string
    ){}
}
export class Clientes{
    constructor(
        public CLIENTE_NOMBRE: String,
        public CLIENTE_CEDULA: String,
        public CLIENTE_CONTRA: String,
        public CLIENTE_TELEFONO: String,
    ){}
}
export class Trabajadores{
    constructor(
        public TRABAJADOR_NOMBRE:String,
        public TRABAJADOR_APELLIDO :String,
        public TRABAJADOR_CEDULA: String,
        public TRABAJADOR_TELEFONO: String,
        public TRABAJADOR_CARGO: String,
    ){}
}
export class Carros{
    constructor(
        public CARRO_PLACA:String,
        public CARRO_MODELO :String,
        public CARRO_ANIO: String,
        public CARRO_COMENTARIO: String,
    ){}
}
export class Establecimientos{
    constructor(
        public ESTABLECIMIENTO_ID:String,
        public ESTABLECIMIENTO_NOMBRE :String,
        public ESTABLECIMIENTO_DESCRIPCION: String,
    ){}
}