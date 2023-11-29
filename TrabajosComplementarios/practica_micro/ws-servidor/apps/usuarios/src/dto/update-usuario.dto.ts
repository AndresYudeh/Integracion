import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateUsuarioInput } from './create-usuario.dto';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateUsuarioInput extends PartialType(CreateUsuarioInput) {
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  ESTADO?: boolean;
}