import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
import { CreateUnidadeInput } from './dto/create-unidade.dto';
import { UpdateUnidadeInput } from './dto/update-unidade.dto';

import { Unidade } from './entities/unidade.entity';
import { Repository, FindOneOptions, Timestamp, DeleteDateColumn  } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';

@Injectable()
export class UnidadesService {

  private readonly logger = new Logger('UnidadesService');

  constructor(
    @InjectRepository(Unidade)
    private readonly unidadeRepository: Repository<Unidade>,
  ){}

  async create(createUnidadeInput: CreateUnidadeInput): Promise<any>  {
    try {
      const unidade =  this.unidadeRepository.create(createUnidadeInput);
      await this.unidadeRepository.save(unidade);
      return unidade;
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

  async findOne(id: number): Promise<Unidade> {
    const unidade= await  this.unidadeRepository.findOneBy ({ id });
    if(!unidade)
      throw new NotFoundException(`Unidad #${id} no encontrado`);
    return unidade;
  }

  async update(id: number, updateUnidadeInput: UpdateUnidadeInput): Promise<Unidade> {
    const unidade = await this.unidadeRepository.preload({
      id: id,
      ...updateUnidadeInput
    });
    if (!unidade) throw new NotFoundException(`Repostaje con ID ${id} no encontrado`)

    try {
      await  this.unidadeRepository.save(unidade)
      return unidade;
      
    } catch (error) {
      console.log(error)
    }
    // return `This action updates a #${id} repostaje`;
  }



  async remove(id: number) {
    const unidade = await this.findOne(id);
    unidade.deletedAt = new Date();
    await this.unidadeRepository.save(unidade);
    return `Esta acción elimina suavemente la unidad #${id}`;
  }

}

