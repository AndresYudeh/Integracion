import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('repostaje')
export class Repostaje {

    @PrimaryGeneratedColumn()
    REPOSTAJE_ID: number;

    @Column( {default:0, type:'int' })
    REPOSTAJE_KMAC: number;

    @Column({type:'text' })
    REPOSTAJE_COMENTARIO: string;
    
    @Column({ default: true, type:'boolean' })
    ESTADO: boolean;

    @Column({nullable:true, type:'text'})
    UNIDADES_PLACA: string;

    @Column( {default:0, type:'int'})
    RUTAS_ID: number;
}
