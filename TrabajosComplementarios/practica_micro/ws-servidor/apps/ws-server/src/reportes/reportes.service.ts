import { Injectable, NotFoundException  } from '@nestjs/common';
import { CreateReporteInput } from './dto/create-reporte.input';
import { UpdateReporteInput } from './dto/update-reporte.input';

import { Reporte} from './entities/reporte.entity';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Document } from 'mongoose';

import { ReportesGateway } from './reportes.gateway';



@Injectable()
export class ReportesService {
  constructor(
    @InjectModel(Reporte.name) private readonly reporteModel: Model<Reporte & Document>,
    private readonly reportesGateway: ReportesGateway,
  ) {}

  // async create(createReporteInput: CreateReporteInput): Promise<Reporte> {
  //   const createdReporte = new this.reporteModel(createReporteInput);
  //   return await createdReporte.save();
  // }


  async create(createReporteInput: CreateReporteInput): Promise<Reporte> {
    const createdReporte = new this.reporteModel(createReporteInput);
    const newReporte = await createdReporte.save();
    
    // Después de crear el reporte, enviar notificación a través de websockets
    const nuevoReporte = {
      // id: newReporte.id,
      REPORTE_ID: newReporte.REPORTE_ID,
      FECHA: newReporte.FECHA,
      DESCRIPCION: newReporte.DESCRIPCION,
      // Otros datos del reporte que quieras enviar a la pantalla
    };

    // this.reportesGateway.notificarNuevoReporte(newReporte.id);
    this.reportesGateway.notificarNuevoReporte(nuevoReporte);


    return newReporte;
  }


  



  async findAll(): Promise<Reporte[]> {
    return await this.reporteModel.find().exec();
  }

  async findOne(REPORTE_ID: string): Promise<Reporte> {
    const reporte = await this.reporteModel.findOne({ REPORTE_ID }).exec();
    if (!reporte) {
      throw new NotFoundException('Repostaje no encontrado');
    }
    return reporte;
  }

  async update(REPORTAJE_ID: string, updateReporteInput: UpdateReporteInput): Promise<Reporte> {
    const updatedReporte = await this.reporteModel.findOneAndUpdate(
      { REPORTE_ID: REPORTAJE_ID },
      updateReporteInput,
      { new: true },
    );
    if (!updatedReporte) {
      throw new NotFoundException('No se pudo actualizar el repostaje');
    }
    return updatedReporte;
  }

  async remove(REPORTE_ID: string): Promise<void> {
    const result = await this.reporteModel.deleteOne({ REPORTE_ID }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('No se pudo eliminar el repostaje');
    }
  }
}

