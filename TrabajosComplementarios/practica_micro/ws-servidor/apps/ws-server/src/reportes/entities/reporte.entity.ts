import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Schema, Prop,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
  export class Reporte extends Document {

    @Field({ nullable: true })
    @Prop({
      type: String,
      required: true,
      unique: true,
    })
    REPORTE_ID: string;

    @Field({ nullable: true })
    @Prop({
      type: Date,
      required: true,
      default: () => new Date(),
    })
    FECHA: Date;

    @Field({ nullable: true })
    @Prop({
      type: String,
      required: true,
    })
    DESCRIPCION: string;
}

export const ReporteSchema = SchemaFactory.createForClass(Reporte);