// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity('repostaje')
// export class Repostaje {

//     @PrimaryGeneratedColumn()
//     REPOSTAJE_ID: number;

//     @Column( {default:0, type:'int' })
//     REPOSTAJE_KMAC: number;

//     @Column({nullable:true, type:'text' })
//     REPOSTAJE_COMENTARIO: string;
    
//     @Column({ default: true, type:'boolean' })
//     ESTADO: boolean;

//     @Column({nullable:true, type:'text'})
//     UNIDADES_PLACA: string;

//     @Column( {default:0, type:'int'})
//     RUTAS_ID: number;
// }

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('repostaje')
@ObjectType()
export class Repostaje {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { nullable: true })
  REPOSTAJE_ID: number;

  @Column({ default: 0, type: 'int' })
  @Field(() => Number, { nullable: true })
  REPOSTAJE_KMAC: number;

  @Column({ nullable: true, type: 'text' })
  @Field({ nullable: true })
  REPOSTAJE_COMENTARIO: string;

  @Column({ default: true, type: 'boolean' })
  @Field(() => Boolean, { nullable: true })
  ESTADO: boolean;

  @Column({ nullable: true, type: 'text' })
  @Field({ nullable: true })
  UNIDADES_PLACA: string;

  @Column({ default: 0, type: 'int' })
  @Field(() => Number, { nullable: true })
  RUTAS_ID: number;
}
