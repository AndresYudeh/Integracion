import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { RepostajeService } from './repostaje.service';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';


@Controller('repostaje')
export class RepostajeController {
  constructor(private readonly repostajeService: RepostajeService) {}

  @Post()
  create(@Body() createRepostajeDto: CreateRepostajeInput) {
    return this.repostajeService.create(createRepostajeDto);
  }

  @Get()
  findAll() {
    return this.repostajeService.findAll();
  }

  

  @Get(':REPOSTAJE_ID')
  async findOne(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number) {
      try {
          const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID)
          return repostaje
      } catch (error) {
          throw new NotFoundException('Repostaje no encontrado')
      }
  }


  @Patch(':REPOSTAJE_ID')
    async update(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() UpdateRepostajeInput: UpdateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput)
            return { message: 'Repostaje actualizado con éxito', repostaje }
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    }

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
