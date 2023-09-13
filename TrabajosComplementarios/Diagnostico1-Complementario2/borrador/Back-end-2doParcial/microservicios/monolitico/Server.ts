//import express, {Router, Express} from "express";
import express,{Router, Express} from "express"
import cors from 'cors'

import { dbConection } from "./Database/Config";

/*aqui declaramos individualmente las rutas 
con las misma estructura pero el nombre RutasCarro deben cambiarlos*/
import {router as RutasCarros} from './Routes/Carros'
import {router as RutasClientes} from './Routes/Clientes'
import {router as RutasEspacios} from './Routes/Espacios'
import {router as RutasEstablecimientos} from './Routes/Establecimientos'
import {router as RutasReserva} from './Routes/Reservas'
import {router as RutasServicios} from './Routes/Servicios'


class Server{
    app:Router;
    router:Router;
    port:Number;
    paths: {[key:string]:string};
    private _express:Express;

    constructor(){
        this.app= Router();
        this.router=Router();
        this.port=Number( process.env["PORT"])
        //aqui deben ir los path de cada modelo
        this.paths={
            carros:'/api/carros',
            clientes:'/api/clientes',
            espacios:'/api/espacios',
            establecimientos:'/api/establecimientos',
            reservas:'/api/reservas',
            servicios:'/api/servicios',
            trabajadores:'/api/trabajadores'
        }
        this.conectarDb();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa', this.app)
        this._express= express().use(this.router)
    }
    private async conectarDb(){
        await dbConection();
    }
    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.carros, RutasCarros)
        this.app.use(this.paths.clientes, RutasClientes)
        this.app.use(this.paths.espacios, RutasEspacios)
        this.app.use(this.paths.establecimientos, RutasEstablecimientos)
        this.app.use(this.paths.reservas, RutasReserva)
        this.app.use(this.paths.servicios, RutasServicios)
    }
    listen(){

        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}/v1/sextoa`)
        }) 
    }
}

export {Server}