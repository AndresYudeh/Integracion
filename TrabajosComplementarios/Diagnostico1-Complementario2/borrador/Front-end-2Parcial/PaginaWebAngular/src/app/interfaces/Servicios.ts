
export interface RespServicios{
    servicios: Servicios[];
}
export interface Servicios{

    SERVICIO_ID:number;
    SERVICIO_NOMBRE:string;
    SERVICIO_PRECIO:number;
    SERVICIO_TIEMPO:string;
    ESTABLECIMIENTO_NOMBRE:string;
}
export interface RespReservas{
    reservas: IReservas[];
}
export interface IReservas{
    RESERVACION_ID: Number;
    CLIENTE_CEDULA: String;
    SERVICIO_ID: Number;
    ESTABLECIMIENTO_ID: Number;
    RESERVACION_PRECIO: Number;
    RESERVACION_FECHA: String;
    RESERVACION_HORA: String;
    CARRO_PLACA: String;
}
export interface RespEstablecimiento{
    establecimiento:Establecimientos[];
}
interface Establecimientos{
    ESTABLECIMIENTO_ID: Number;
    ESTABLECIMIENTO_NOMBRE: String;
    ESTABLECIMIENTO_DESCRIPCION: String;
    Estado: Boolean;

}
export interface RespCarros{
    carros: Carros[];
}
export interface Carros{
    CARRO_PLACA: string;
    CARRO_MODELO: string;
    CARRO_ANIO: number;
    CARRO_COMENTARIO: string;
    Estado: Boolean;

}


export interface RespClientes{
    clientes: Clientes[];
}
export interface Clientes{
    CLIENTE_NOMBRE: String;
    CLIENTE_CEDULA: String;
    CLIENTE_TELEFONO: String;
    CLIENTE_CONTRA: String;
    Estado: Boolean;
}

export interface RespTrabajadores{
    trabajadores: Trabajadores[];
}

export interface Trabajadores{
    TRABAJADOR_NOMBRE:String;
    TRABAJADOR_APELLIDO :String;
    TRABAJADOR_CEDULA: String;
    TRABAJADOR_TELEFONO: String;
    TRABAJADOR_CARGO: String;
    Estado: Boolean;
}
export interface Clientes{
    CLIENTE_NOMBRE: String;
    CLIENTE_CEDULA: String;
    CLIENTE_CONTRA: String;
    CLIENTE_TELEFONO: String
}