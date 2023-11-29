import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, IsOptional, MaxLength, Max } from 'class-validator';

@InputType()
export class CreateUsuarioInput {

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    CORREO: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    @Max(99)
    ID_ROL: number;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    PLACA: string;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    NOMBRE: string;

}