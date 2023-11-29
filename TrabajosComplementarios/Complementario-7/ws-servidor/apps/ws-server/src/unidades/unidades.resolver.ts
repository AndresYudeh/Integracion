import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UnidadesService } from './unidades.service';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateUnidadeInput } from './dto/create-unidade.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';

import { NotFoundException, InternalServerErrorException } from '@nestjs/common';

import { Unidade } from './entities/unidade.entity';



@Resolver()
export class UnidadeResolver {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Mutation(() => Unidade)
  async createUnidade(@Args('createUnidadeInput') CreateUnidadeInput: CreateUnidadeInput) {
    return this.unidadesService.create(CreateUnidadeInput);
  }

//   @Mutation()
//   async createRepostaje(
//     @Body(CreateRepostajeInput) createRepostajeInput: CreateRepostajeInput
//   ): Promise<Repostaje> {
//     return await this.repostajeService.create(createRepostajeInput);
//   }

//   @Mutation(() => Repostaje)
//   async createRepostaje(@Args('createRepostajeInput') createRepostajeInput: CreateRepostajeInput)
//   :Promise<Repostaje> {
//     return this.repostajeService.create(createRepostajeInput);
//   }

  @Query(() => [Unidade])
  async unidade() {
    return this.unidadesService.findAll();
  }

  @Query(() => Unidade)
  async unidades(@Args('id') id: number) {
    try {
      const unidade = await this.unidadesService.findOne(id);
      if (!unidade) {
        throw new NotFoundException('Unidade no encontrado');
      }
      return unidade;
    } catch (error) {
      throw new NotFoundException('Unidade no encontrado');
    }
  }

  @Mutation(() => Unidade)
  async updateUnidade(
    @Args('id') id: number,
    @Args('updateUnidadeInput') updateUnidadeInput: UpdateUnidadeInput,
  ) {
    try {
      const unidade = await this.unidadesService.update(id, updateUnidadeInput);
      return unidade;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar la unidad');
    }
  }

 /*  @Mutation(() => Unidade)
  async removeUnidade(@Args('id') id: number) {
    try {
      await this.unidadesService.remove(id);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar la unidad');
    }
  } */

  @Mutation(() => Unidade)
  async removeUnidade(@Args('id') id: number) {
    try {
      await this.unidadesService.remove(id);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar la unidad');
    }
  }

/*   @Mutation(() => Unidade)
  async removeUnidade(@Args('id') id: number): Promise<Unidade | null> {
    try {
      const unidade = await this.unidadesService.remove(id);

      if (!unidade) {
        throw new NotFoundException('No se pudo encontrar la unidad para eliminar');
      }

      return unidade;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar la unidad');
    }
  } */


 /*  @Mutation(() => Unidade)
  async removeUnidade(@Args('id') id: number) {
    try {
      await this.unidadesService.remove(id);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar la unidad');
    }
  } */

}
