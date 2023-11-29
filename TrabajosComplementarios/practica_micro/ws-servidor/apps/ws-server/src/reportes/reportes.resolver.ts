import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportesService } from './reportes.service';
import { Reporte } from './entities/reporte.entity';
import { CreateReporteInput } from './dto/create-reporte.input';
import { UpdateReporteInput } from './dto/update-reporte.input';

import { NotFoundException, InternalServerErrorException } from '@nestjs/common';


@Resolver(() => Reporte)
export class ReportesResolver {
  constructor(private readonly reportesService: ReportesService) {}

  @Mutation(() => Reporte)
   async createReporte(@Args('createReporteInput') createReporteInput: CreateReporteInput) {
    return this.reportesService.create(createReporteInput);
  }

  @Query(() => [Reporte], { name: 'reportes' })
  findAll() {
    return this.reportesService.findAll();
  }

  @Query(() => Reporte)
  async reportes(@Args('REPORTE_ID') REPORTE_ID: string ) {
    try {
      const reporte = await this.reportesService.findOne(REPORTE_ID);
      if (!reporte) {
        throw new NotFoundException('Reporte no encontrado');
      }
      return reporte;
    } catch (error) {
      throw new NotFoundException('Reporte no encontrado');
    }
  }

  // @Query(() => Reporte, { name: 'reporte' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportesService.findOne(id);
  // }

  // @Mutation(() => Reporte)
  // updateReporte(@Args('updateReporteInput') updateReporteInput: UpdateReporteInput) {
  //   return this.reportesService.update(updateReporteInput.REPORTE_ID, updateReporteInput);
  // }

  @Mutation(() => Reporte)
  async updateReporte(
    @Args('REPORTE_ID') REPOSTAJE_ID: string,
    @Args('updateReporteInput') updateReporteInput: UpdateReporteInput,
  ) {
    try {
      const reporte = await this.reportesService.update(REPOSTAJE_ID, updateReporteInput);
      return reporte;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el reporte');
    }
  }

  // @Mutation(() => Reporte)
  // removeReporte(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportesService.remove(id);
  // }

  @Mutation(() => Reporte)
  async removeReporte(@Args('REPORTE_ID') REPORTE_ID: string) {
    try {
      await this.reportesService.remove(REPORTE_ID);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el reporte');
    }
  }




}
