import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepostajeModule } from './repostaje/repostaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';


@Module({
  imports: [RepostajeModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "city",
      "entities": [join(__dirname, '**','*.entity.{ts,js}')],
      "synchronize": true
    }),
    MensajesWsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
