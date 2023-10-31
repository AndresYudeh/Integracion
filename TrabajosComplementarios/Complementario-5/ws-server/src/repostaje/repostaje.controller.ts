import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { RepostajeService } from './repostaje.service';
import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { UpdateRepostajeDto } from './dto/update-repostaje.dto';

@Controller('repostaje')
export class RepostajeController {
  constructor(private readonly repostajeService: RepostajeService) {}

  // @Post()
  // create(@Body() createRepostajeDto: CreateRepostajeDto) {
  //   return this.repostajeService.create(createRepostajeDto);
  // }

  // @Get()
  // findAll() {
  //   return this.repostajeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.repostajeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRepostajeDto: UpdateRepostajeDto) {
  //   return this.repostajeService.update(+id, updateRepostajeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.repostajeService.remove(+id);
  // }

  @Post()
  create(@Body() createRepostajeDto: CreateRepostajeDto) {
    return this.repostajeService.create(createRepostajeDto);
  }

  @Get()
  findAll() {
    return this.repostajeService.findAll();
  }

  // @Get(':REPOSTAJE_ID')
  // findOne(@Param('REPOSTAJE_ID', ParseUUIDPipe) REPOSTAJE_ID: number) {
  //   return this.repostajeService.findOne(REPOSTAJE_ID);
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: number) {
  //     try {
  //         const repostaje = await this.repostajeService.findOne(id)
  //         return repostaje
  //     } catch (error) {
  //         throw new NotFoundException('Cliente no encontrado')
  //     }
  // }

  @Get(':REPOSTAJE_ID')
  async findOne(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number) {
      try {
          const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID)
          return repostaje
      } catch (error) {
          throw new NotFoundException('Repostaje no encontrado')
      }
  }

  // @Patch(':REPOSTAJE_ID')
  // update(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() updateRepostajeDto: UpdateRepostajeDto) {
  //   return this.repostajeService.update(REPOSTAJE_ID, updateRepostajeDto);
  // }

  @Patch(':REPOSTAJE_ID')
    async update(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() UpdateRepostajeDto: UpdateRepostajeDto) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeDto)
            return { message: 'Repostaje actualizado con éxito', repostaje }
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    }
  
  

  // @Delete(':REPOSTAJE_ID')
  // remove(@Param('REPOSTAJE_ID', ParseUUIDPipe) REPOSTAJE_ID: number) {
  //   return this.repostajeService.remove(REPOSTAJE_ID);
  // }

  @Delete(':REPOSTAJE_ID')
    async remove(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID)
            return { message: 'Repostaje eliminado con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el producto');
        }
    }

}
