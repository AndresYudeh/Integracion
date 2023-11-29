import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateUnidadeInput } from './create-unidade.dto';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateUnidadeInput extends PartialType(CreateUnidadeInput) {
    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsOptional()
    ESTADO?: boolean;
}
