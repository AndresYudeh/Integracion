import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './entities/usuario.entity';
import { UsuariosResolver } from './usuarios.resolver';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

import { ClientsModule, Transport } from '@nestjs/microservices';



// @Module({
//   controllers: [UsuariosController],
//   providers: [UsuariosService, UsuariosResolver],
//   imports:[TypeOrmModule.forFeature([Usuario])],
//   exports:[UsuariosService, TypeOrmModule]
// })

@Module({
  imports: [
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "city",
      "entities": [Usuario],
      "synchronize": true,
      "logging": true
    }),
    TypeOrmModule.forFeature([Usuario]),
   ],
   controllers: [UsuariosController],
   providers: [UsuariosService, UsuariosResolver],
   exports:[UsuariosService, TypeOrmModule]
})

export class UsuariosModule {}