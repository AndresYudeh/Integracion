import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { RepostajeService } from './repostaje.service';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { RepostajeMSG } from '../constants';


@Controller('repostaje')
export class RepostajeController {
  constructor(private readonly repostajeService: RepostajeService) {}

  @MessagePattern(RepostajeMSG.CREATE)
  create(@Payload() createRepostajeDto: CreateRepostajeInput) {
    return this.repostajeService.create(createRepostajeDto);
  }

  @MessagePattern(RepostajeMSG.FIND_ALL)
  findAll() {
    return this.repostajeService.findAll();
  }

  

  @MessagePattern(RepostajeMSG.FIND_ONE)
  async findOne(@Payload('REPOSTAJE_ID') REPOSTAJE_ID: number) {
      try {
          const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID)
          return repostaje
      } catch (error) {
          throw new NotFoundException('Repostaje no encontrado')
      }
  }


  @MessagePattern(RepostajeMSG.UPDATE)
    async update(@Payload('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() UpdateRepostajeInput: UpdateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput)
            return { message: 'Repostaje actualizado con éxito', repostaje }
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    }

    @MessagePattern(RepostajeMSG.DELETE)
    async remove(@Payload('REPOSTAJE_ID') REPOSTAJE_ID: number) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID)
            return { message: 'Repostaje eliminado con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el producto');
        }
    }

}
