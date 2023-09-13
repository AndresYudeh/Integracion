import { Servicio } from '../Models'
import { Servicios } from '../Interfaces'
import { Request, Response } from 'express'


const obtenerServicios = async (req:Request,res:Response)=>{
    const { limite =10, desde=0} = req.query;
    const query = { Estado:true };
    const [total, datos] = await Promise.all([
        Servicio.countDocuments(query),
        Servicio.find(query)
    ])
res.json(datos)
}

/*Modificación de API obtener servicio para que busque los servicios con el mismo nombre, para poder filtrar los establecimientos que ofrecen este servicio*/
 const obtenerServicio = async (req:Request,res:Response)=>{
    const SERVICIO_NOMBRE = req.params;
    const { limite =10, desde=0} = req.query;
    const query = SERVICIO_NOMBRE;
    const [total, datos] = await Promise.all([
        Servicio.countDocuments(query),
        Servicio.find(query)
    ])
    if(!Servicio.find(query)){
        return res.status(400).json({status:'No es un nombre de servicio válido, por favor inténtelo de nuevo'})
    }
    res.json(datos)
}


/* const obtenerServicio = async (req:Request,res:Response)=>{     
    const SERVICIO_NOMBRE = req.params;
     const servicio: Servicios | null = (await Servicio.findOne(SERVICIO_NOMBRE));
     if(!servicio){
         return res.status(400).json({status:'No es un nombre de servicio válido, por favor inténtelo de nuevo'})
     }
     res.json(servicio);
} */

const crearServicio = async (req:Request,res:Response)=>{
    const {Estado, ...body} = req.body;
    const servicio = new Servicio(body);
    const ServicioNuevo = await servicio.save();
    res.status(201).json(ServicioNuevo);
}


const actualizarServicio = async (req:Request,res:Response)=>{
    const id = req.params;
    const {Estado, ...body} = req.body;
    const ServicioModificado = await Servicio.findOneAndUpdate(id, body, { new:true }).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(ServicioModificado);
}


const borrarServicio = async (req:Request,res:Response)=>{
    const id = req.params;
    const ServicioBorrado = await Servicio.findOneAndDelete(id, {Estado:false}).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(ServicioBorrado);
}

export {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    borrarServicio
}