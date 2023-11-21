import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException  } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { CreateUnidadeInput } from './dto/create-unidade.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeInput) {
    return this.unidadesService.create(createUnidadeDto);
  } 

  @Get(':id')
  async findOne(@Param('id') id: number) {
      try {
          const unidades = await this.unidadesService.findOne(id)
          return unidades
      } catch (error) {
          throw new NotFoundException('Unidad no encontrada')
      }
  }


  @Patch(':id')
    async update(@Param('id') id: number, @Body() UpdateUnidadesInput: UpdateUnidadeInput) {
        try {
            const unidades = await this.unidadesService.update(id, UpdateUnidadesInput)
            return { message: 'Unidad actualizada con éxito', unidades }
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar la unidad');
        }
    }

/*   @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.unidadesService.remove(id)
            return { message: 'Unidad eliminada con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar la unidad');
        }
    } */

/*     @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.unidadesService.delete(id)
            return { message: 'Unidad eliminada con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar la unidad');
        }
    } */
}
