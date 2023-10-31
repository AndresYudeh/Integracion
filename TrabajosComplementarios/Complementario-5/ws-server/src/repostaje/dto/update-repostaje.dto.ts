import { PartialType } from '@nestjs/mapped-types';
import { CreateRepostajeDto } from './create-repostaje.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateRepostajeDto extends PartialType(CreateRepostajeDto) {
    @IsBoolean()
    @IsOptional()
    ESTADO?: boolean;
}
