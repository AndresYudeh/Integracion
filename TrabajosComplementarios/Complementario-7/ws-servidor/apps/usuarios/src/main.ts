import { NestFactory } from '@nestjs/core';
import { UsuariosModule } from './usuarios.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.create(UsuariosModule);
//   await app.listen(3001);
// }

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsuariosModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://imalogvd:gfD-TW4zuHso-ydWlFOfdMS2mPw597d3@fish.rmq.cloudamqp.com/imalogvd'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen();
}
bootstrap();
