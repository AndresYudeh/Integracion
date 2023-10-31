import { Module } from '@nestjs/common';
import { RepostajeService } from './repostaje.service';
import { RepostajeController } from './repostaje.controller';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Repostaje } from './entities/repostaje.entity';

@Module({
  providers: [RepostajeService],
  controllers: [RepostajeController],
  imports:[TypeOrmModule.forFeature([Repostaje])],
  exports:[RepostajeService, TypeOrmModule]

})
export class RepostajeModule {}
