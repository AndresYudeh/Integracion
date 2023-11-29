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

/*   async remove(id: number): Promise<Unidade> {
    const unidade = await this.unidadeRepository.findOne(id as FindOneOptions<Unidade>);

    if (!unidade) {
      throw new NotFoundException('Unidad no encontrada');
    }

    // Realizar el soft delete estableciendo la fecha de eliminación
    unidade.deletedAt = new Date();
    return await this.unidadeRepository.save(unidade);
  } */

  async remove(id: number) {
    const unidade = await this.findOne(id);
    unidade.deletedAt = new Date();
    await this.unidadeRepository.save(unidade);
    return `Esta acción elimina suavemente la unidad #${id}`;
  }

}

/* 
  async softRemove(id: number): Promise<boolean> {
    try {
      const unidade = await this.unidadeRepository.findOne(id as FindOneOptions<Unidade>);
      if (!unidade) {
        return false; // Indica que no se encontró la unidad para eliminar
      }

      unidade.deletedAt = new Date(); // Asignar la fecha actual
      await this.unidadeRepository.save(unidade);

      return true; // Indica que el soft delete se realizó correctamente
    } catch (error) {
      throw error; // Puedes manejar el error según tus necesidades
    }
  }
} */

/*   async remove(id: number) {
    const unidade = await this.findOne(id);
    await this.unidadeRepository.remove(unidade);
    return `This action removes a #${id} unidad`;
  }
 */
