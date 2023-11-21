import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, IsOptional, MaxLength, Max } from 'class-validator';

@InputType()
export class CreateUnidadeInput {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(7)
    UNIDADES_PLACA: string;
  
    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    @Max(9999999)
    NUMERO_UNIDAD: number;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    @Max(999)
    ID_EMPRESA: number;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    CORREO: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    COLOR: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    MATRICULA: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    @Max(2050)
    ANIO: number;
}
