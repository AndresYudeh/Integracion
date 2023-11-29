import { ReportesGateway } from './reportes/reportes.gateway';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepostajeModule } from './repostaje/repostaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ReportesModule } from './reportes/reportes.module';
import { UnidadesModule } from './unidades/unidades.module';


import { MongooseModule } from '@nestjs/mongoose';
import { Repostaje } from './repostaje/entities/repostaje.entity';
import { Reporte } from './reportes/entities/reporte.entity';
import { Unidade } from './unidades/entities/unidade.entity';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { Usuario } from 'apps/usuarios/src/entities/usuario.entity';


@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb+srv://aw2:Admin2023@backyardigans.z0jx9hg.mongodb.net/?retryWrites=true&w=majority'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    RepostajeModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "city",
      "entities": [Repostaje, Reporte, Unidade, Usuario],
      "synchronize": true,
      "logging": true
    }),
    ReportesModule,
    UnidadesModule],
  controllers: [AppController],
  providers: [
    ReportesGateway, AppService],
})
export class AppModule { }
