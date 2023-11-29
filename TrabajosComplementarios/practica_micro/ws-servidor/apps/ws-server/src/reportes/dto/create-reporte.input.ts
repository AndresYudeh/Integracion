import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';


@InputType()
export class CreateReporteInput {

  @Field(()=>String)
  @IsNotEmpty()
  REPORTE_ID: string;

  @Field(()=>Date)
  @IsNotEmpty()
  FECHA: Date;

  @Field(()=>String)
  @IsNotEmpty()
  DESCRIPCION: string;


  
}
