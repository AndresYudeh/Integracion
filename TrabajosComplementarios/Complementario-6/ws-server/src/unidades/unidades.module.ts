import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
/* import { UnidadeRepository } from './repositories/unidade.repository'; */
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Unidade } from './entities/unidade.entity';
import { UnidadeResolver } from './unidades.resolver';

@Module({
  controllers: [UnidadesController],
  providers: [UnidadeResolver,UnidadesService],
  imports:[TypeOrmModule.forFeature([Unidade/* , UnidadeRepository */])],
  exports:[UnidadesService, TypeOrmModule]
})
export class UnidadesModule {}
