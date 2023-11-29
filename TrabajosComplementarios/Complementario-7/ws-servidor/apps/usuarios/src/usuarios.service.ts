// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsuariosService {
//   getHello(): string {
//     return 'Que me mira';
//   }
// }

import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioInput } from './dto/create-usuario.dto';
import { UpdateUsuarioInput } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private readonly logger = new Logger('UsuariosService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ){}

  async create(CreateUsuarioInput: CreateUsuarioInput): Promise<any>  {
    try {
      const usuario =  this.usuariosRepository.create(CreateUsuarioInput);
      await this.usuariosRepository.save(usuario);
      return usuario;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    // return 'This action adds a new repostaje';
  }

  findAll() {
    return `Busca algo mas especifico flaco`;
  }

  async findOne(ID_USUARIOS: number): Promise<Usuario> {
    const usuario= await  this.usuariosRepository.findOneBy ({ ID_USUARIOS });
    if(!usuario)
      throw new NotFoundException(`Repostaje ${ID_USUARIOS} no encontrado`);
    return usuario;
  }

  async update(ID_USUARIOS: number, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    const usuario = await this.usuariosRepository.preload({
      ID_USUARIOS: ID_USUARIOS,
      ...updateUsuarioInput 
    });
    if (!usuario) throw new NotFoundException(`Repostaje con ID ${ID_USUARIOS} no encontrado`)

    try {
      await  this.usuariosRepository.save(usuario)
      return usuario;
      
    } catch (error) {
      console.log(error)
    }
    // return `This action updates a #${id} repostaje`;
  }



  async remove(ID_USUARIOS: number) {
    const usuario = await this.findOne(ID_USUARIOS);
    await this.usuariosRepository.remove(usuario);
    return `This action removes a #${ID_USUARIOS} repostaje`;
  }
  // prueba():String[]{
  //   return ['uno','dos','tres'];
  // }
}
