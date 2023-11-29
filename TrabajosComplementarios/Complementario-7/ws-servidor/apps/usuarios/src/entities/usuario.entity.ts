import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
@ObjectType()

export class Usuario {

    @PrimaryGeneratedColumn()
    @Field(() => ID, { nullable: true })
    ID_USUARIOS: number;

    @Column({ default: true, type: 'boolean' })
    @Field(() => Boolean, { nullable: true })
    ESTADO: boolean;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    CORREO: string;

    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    ID_ROL: number;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    PLACA: string;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    NOMBRE: string;
    
}