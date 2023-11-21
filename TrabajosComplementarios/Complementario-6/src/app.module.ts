import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepostajeModule } from './repostaje/repostaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UnidadesModule } from './unidades/unidades.module';





@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
      plugins:[
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
      "entities": [join(__dirname, '**','*.entity.{ts,js}')],
      "synchronize": true
    }),
    UnidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
