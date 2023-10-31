import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';

import { RepostajeModule } from 'src/repostaje/repostaje.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[RepostajeModule]
})
export class MensajesWsModule {}
