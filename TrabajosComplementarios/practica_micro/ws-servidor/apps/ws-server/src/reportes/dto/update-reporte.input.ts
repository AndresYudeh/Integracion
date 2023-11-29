import { CreateReporteInput } from './create-reporte.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReporteInput extends PartialType(CreateReporteInput) {

  @Field(()=>String)
  REPORTE_ID: string;
}
