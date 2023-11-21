// import {IsNumber, IsString, IsNotEmpty, IsOptional, MaxLength, Max } from "class-validator";

// export class CreateRepostajeDto {
//     // @IsNumber()
//     // @IsNotEmpty()
//     // REPOSTAJE_ID: number;

//     @IsNumber()
//     @IsNotEmpty()
//     @Max(999999)
//     REPOSTAJE_KMAC: number;

//     @IsString()
//     @IsOptional()
//     REPOSTAJE_COMENTARIO: string;

//     @IsString()
//     @IsNotEmpty()
//     @MaxLength(7)
//     UNIDADES_PLACA: string;

//     @IsNumber()
//     @IsNotEmpty()
//     @Max(9999999)
//     RUTAS_ID: number;


    
// }

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, IsOptional, MaxLength, Max } from 'class-validator';

@InputType()
export class CreateRepostajeInput {
  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  @Max(999999)
  REPOSTAJE_KMAC: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  REPOSTAJE_COMENTARIO: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(7)
  UNIDADES_PLACA: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  @Max(9999999)
  RUTAS_ID: number;
}
