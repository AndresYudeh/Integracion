import { Injectable } from '@nestjs/common';

import {Socket} from 'socket.io'
import { Repostaje } from 'src/repostaje/entities/repostaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RepostajeService } from 'src/repostaje/repostaje.service';

interface ConnectedClients {
    [REPOSTAJE_ID:number]: {
       socket: Socket,
       repostaje: Repostaje
    }
}


@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Repostaje)
     private readonly repostajeRepository: Repository<Repostaje>,
     private readonly repostajeService: RepostajeService
      ){}

    async registerClient(client:Socket, ID: number){
        console.log(this.repostajeService.prueba());
        const repostaje =await  this.repostajeRepository.findOneBy({ REPOSTAJE_ID: ID });
        if (!repostaje) throw new Error('Repostaje no encontrado');
        if (!repostaje.ESTADO) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, repostaje: repostaje};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id: string){
        return this.connectedClients[id].repostaje.REPOSTAJE_ID;
    }
}
