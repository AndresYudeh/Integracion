import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioInput } from './dto/create-usuario.dto';
import { UpdateUsuarioInput } from './dto/update-usuario.dto';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';



@Resolver()
export class UsuariosResolver {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Mutation(() => Usuario)
  async createUsuarios(@Args('createUsuarioInput') CreateUsuarioInput: CreateUsuarioInput) {
    return this.usuarioService.create(CreateUsuarioInput);
  }



  @Query(() => [Usuario])
  async repostajes() {
    return this.usuarioService.findAll();
  }

  @Query(() => Usuario)
  async usuario(@Args('ID_USUARIOS') ID_USUARIOS: number) {
    try {
      const usuario = await this.usuarioService.findOne(ID_USUARIOS);
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  @Mutation(() => Usuario)
  async updateUsuarios(
    @Args('ID_USUARIOS') ID_USUARIOS: number,
    @Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput,
  ) {
    try {
      const usuario = await this.usuarioService.update(ID_USUARIOS, updateUsuarioInput);
      return usuario;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el usuario');
    }
  }

  @Mutation(() => Usuario)
  async removeUsuarios(@Args('ID_USUARIOS') ID_USUARIOS: number) {
    try {
      await this.usuarioService.remove(ID_USUARIOS);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el usuario');
    }
  }

}
