import { Module } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { ReportesResolver } from './reportes.resolver';

import { MongooseModule } from '@nestjs/mongoose';
import { Reporte, ReporteSchema } from './entities/reporte.entity';

import { ReportesGateway } from './reportes.gateway';
import { Model } from 'mongoose';



@Module({
  providers: [ReportesGateway, ReportesResolver, ReportesService],
  imports:[
    MongooseModule.forFeature([{ name: Reporte.name, schema: ReporteSchema }])
  ]
})
export class ReportesModule {}
