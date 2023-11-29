
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateRepostajeInput } from './create-repostaje.dto';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateRepostajeInput extends PartialType(CreateRepostajeInput) {
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  ESTADO?: boolean;
}

