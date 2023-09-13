/* export interface Servicios{
    SERVICIO_ID:Number;
    SERVICIO_NOMBRE:String;
    SERVICIO_PRECIO:Number;
    SERVICIO_TIEMPO:String;
    ESTABLECIMIENTO_NOMBRE:String;
    Estado:Boolean;
} */

export interface Servicios{

    _id?: string;
    SERVICIO_ID:number;
    SERVICIO_NOMBRE:string;
    SERVICIO_PRECIO:number;
    SERVICIO_TIEMPO:string;
    ESTABLECIMIENTO_NOMBRE:string;
    Estado:boolean;
    __v?:number;
}

export interface IResServicios{
    total: number;
    servicios: Servicios[];
}