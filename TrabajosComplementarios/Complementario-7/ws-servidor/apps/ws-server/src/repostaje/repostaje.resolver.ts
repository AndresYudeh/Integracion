import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RepostajeService } from './repostaje.service';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';

import { NotFoundException, InternalServerErrorException } from '@nestjs/common';

import { Repostaje } from './entities/repostaje.entity';



@Resolver()
export class RepostajeResolver {
  constructor(private readonly repostajeService: RepostajeService) {}

  @Mutation(() => Repostaje)
  async createRepostaje(@Args('createRepostajeInput') CreateRepostajeInput: CreateRepostajeInput) {
    return this.repostajeService.create(CreateRepostajeInput);
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

  @Query(() => [Repostaje])
  async repostajes() {
    return this.repostajeService.findAll();
  }

  @Query(() => Repostaje)
  async repostaje(@Args('REPOSTAJE_ID') REPOSTAJE_ID: number) {
    try {
      const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
      if (!repostaje) {
        throw new NotFoundException('Repostaje no encontrado');
      }
      return repostaje;
    } catch (error) {
      throw new NotFoundException('Repostaje no encontrado');
    }
  }

  @Mutation(() => Repostaje)
  async updateRepostaje(
    @Args('REPOSTAJE_ID') REPOSTAJE_ID: number,
    @Args('updateRepostajeInput') updateRepostajeInput: UpdateRepostajeInput,
  ) {
    try {
      const repostaje = await this.repostajeService.update(REPOSTAJE_ID, updateRepostajeInput);
      return repostaje;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el repostaje');
    }
  }

  @Mutation(() => Repostaje)
  async removeRepostaje(@Args('REPOSTAJE_ID') REPOSTAJE_ID: number) {
    try {
      await this.repostajeService.remove(REPOSTAJE_ID);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el repostaje');
    }
  }

//   @Mutation(() => Repostaje)
//   async removeRepostaje(@Args('REPOSTAJE_ID') REPOSTAJE_ID: number) {
//     try {
//       const removedRepostaje = await this.repostajeService.remove(REPOSTAJE_ID);
//       return removedRepostaje; // Retorna el repostaje eliminado
//     } catch (error) {
//       throw new NotFoundException('No se pudo eliminar el repostajeee');
//     }
// }


}
