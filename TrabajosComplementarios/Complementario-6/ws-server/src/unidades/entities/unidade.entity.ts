import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';

@Entity('unidade')
@ObjectType()
export class Unidade {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    UNIDADES_PLACA: string;
  
    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    NUMERO_UNIDAD: number;

    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    ID_EMPRESA: number;
  
    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    CORREO: string;

    @Column({ default: true, type: 'boolean' })
    @Field(() => Boolean, { nullable: true })
    ESTADO: boolean;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    COLOR: string;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    MATRICULA: string;
  
    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true }) 
    ANIO: number;

    @DeleteDateColumn({ type: 'datetime', nullable: true })
    deletedAt: Date; 

}
function PrimaryColumn(target: Unidade, propertyKey: 'decorator'): void {
    throw new Error('Function not implemented.');
}

