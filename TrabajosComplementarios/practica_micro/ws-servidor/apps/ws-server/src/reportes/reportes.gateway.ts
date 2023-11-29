// import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';

// @WebSocketGateway()
// export class Gateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {

//     @WebSocketServer()
//     server: any;

//     @SubscribeMessage('events')
//     handleEvent(@MessageBody() data: string) {
//         this.server.emit('events', data);
//     }

//     handleConnection(client: any, ...args: any[]) {
//         console.log('User connected');
//     }

//     handleDisconnect(client: any) {
//         console.log('User disconnected');
//     }

//     afterInit(server: any) {
//         console.log('Socket is live')
//     }
// }


// reportes.gateway.ts
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class ReportesGateway {
  @WebSocketServer() server: Server;

  notificarNuevoReporte(nuevoReporte: any) {
    this.server.emit('nuevoReporte', nuevoReporte);
  }
}

// import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
// import { Server } from 'socket.io';
// import { Model, Document } from 'mongoose'; // Asegúrate de importar el tipo Model desde mongoose
// import { Reporte } from './entities/reporte.entity'; // Asegúrate de tener definido ReporteDocument

// @WebSocketGateway({ cors: true })
// export class ReportesGateway {
//   @WebSocketServer() server: Server;

//   constructor(private readonly reporteModel: Model<Reporte>) {}

//   async notificarNuevoReporte(idReporte: String) {
//     try {
//       const reporteEncontrado = await this.reporteModel.findById(idReporte).exec();

//       if (reporteEncontrado) {
//         const nuevoReporte = {
//           _id: reporteEncontrado.REPORTE_ID,
//           descripcion: reporteEncontrado.DESCRIPCION,
//           fecha: reporteEncontrado.FECHA,
//           // Otros campos relevantes
//         };

//         this.server.emit('nuevoReporte', nuevoReporte);
//       }
//     } catch (error) {
//       // Manejar errores, por ejemplo:
//       console.error('Error al buscar el reporte:', error);
//     }
//   }
// }




