import { Test, TestingModule } from '@nestjs/testing';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { MensajesWsService } from './mensajes-ws.service';

describe('MensajesWsGateway', () => {
  let gateway: MensajesWsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajesWsGateway, MensajesWsService],
    }).compile();

    gateway = module.get<MensajesWsGateway>(MensajesWsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
