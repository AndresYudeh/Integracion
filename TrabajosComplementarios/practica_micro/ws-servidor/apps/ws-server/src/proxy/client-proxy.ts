import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQ } from '../constants';

@Injectable()
export class ClientProxyMankar {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://imalogvd:gfD-TW4zuHso-ydWlFOfdMS2mPw597d3@fish.rmq.cloudamqp.com/imalogvd'],
        queue: RabbitMQ.UsuarioQueue,
      },
    });
  }
}
