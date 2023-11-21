import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';

import { Repostaje } from './entities/repostaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RepostajeService {
  
  private readonly logger = new Logger('RepostajeService');

  constructor(
    @InjectRepository(Repostaje)
    private readonly repostajeRepository: Repository<Repostaje>,
  ){}

  async create(createRepostajeInput: CreateRepostajeInput): Promise<any>  {
    try {
      const repostaje =  this.repostajeRepository.create(createRepostajeInput);
      await this.repostajeRepository.save(repostaje);
      return repostaje;
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

  async findOne(REPOSTAJE_ID: number): Promise<Repostaje> {
    const repostaje= await  this.repostajeRepository.findOneBy ({ REPOSTAJE_ID });
    if(!repostaje)
      throw new NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
    return repostaje;
  }

  async update(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje> {
    const repostaje = await this.repostajeRepository.preload({
      REPOSTAJE_ID: REPOSTAJE_ID,
      ...updateRepostajeInput
    });
    if (!repostaje) throw new NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`)

    try {
      await  this.repostajeRepository.save(repostaje)
      return repostaje;
      
    } catch (error) {
      console.log(error)
    }
    // return `This action updates a #${id} repostaje`;
  }



  async remove(REPOSTAJE_ID: number) {
    const repostaje = await this.findOne(REPOSTAJE_ID);
    await this.repostajeRepository.remove(repostaje);
    return `This action removes a #${REPOSTAJE_ID} repostaje`;
  }
  // prueba():String[]{
  //   return ['uno','dos','tres'];
  // }
}
