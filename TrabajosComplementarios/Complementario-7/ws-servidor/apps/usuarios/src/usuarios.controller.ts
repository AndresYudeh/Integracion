import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioInput } from './dto/create-usuario.dto';
import { UpdateUsuarioInput } from './dto/update-usuario.dto';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuarioMSG } from './constants';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

//   @Post()
  @MessagePattern(UsuarioMSG.CREATE)
  create(@Payload() CreateUsuarioInput: CreateUsuarioInput) {
    return this.usuariosService.create(CreateUsuarioInput);
  }

//   @Get()
  @MessagePattern(UsuarioMSG.FIND_ALL)
  findAll() {
    return this.usuariosService.findAll();
  }

  

//   @Get(':ID_USUARIOS')
  @MessagePattern(UsuarioMSG.FIND_ONE)
  async findOne(@Payload('ID_USUARIOS') ID_USUARIOS: number) {
      try {
          const usuario = await this.usuariosService.findOne(ID_USUARIOS)
          return usuario
      } catch (error) {
          throw new NotFoundException('Repostaje no encontrado')
      }
  }


//   @Patch(':ID_USUARIOS')
  @MessagePattern(UsuarioMSG.UPDATE)
    async update(@Payload('ID_USUARIOS') ID_USUARIOS: number, @Body() UpdateUsuarioInput: UpdateUsuarioInput) {
        try {
            const usuario = await this.usuariosService.update(ID_USUARIOS, UpdateUsuarioInput)
            return { message: 'Repostaje actualizado con éxito', usuario }
        } catch (error) {
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    }

//   @Delete(':ID_USUARIOS')

  @MessagePattern(UsuarioMSG.DELETE)
    async remove(@Payload('ID_USUARIOS') ID_USUARIOS: number) {
        try {
            await this.usuariosService.remove(ID_USUARIOS)
            return { message: 'Repostaje eliminado con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el producto');
        }
    }

}
