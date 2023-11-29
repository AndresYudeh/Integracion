import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
/* import { UnidadeRepository } from './repositories/unidade.repository'; */
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Unidade } from './entities/unidade.entity';
import { UnidadeResolver } from './unidades.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  controllers: [UnidadesController],
  providers: [UnidadeResolver,UnidadesService],
  imports:[
    TypeOrmModule.forFeature([Unidade/* , UnidadeRepository */]),
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://imalogvd:gfD-TW4zuHso-ydWlFOfdMS2mPw597d3@fish.rmq.cloudamqp.com/imalogvd'],
          queue: 'cats_queue', // Nombre de la cola
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  exports:[UnidadesService, TypeOrmModule]
})
export class UnidadesModule {}
