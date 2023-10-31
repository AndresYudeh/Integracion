import { Test, TestingModule } from '@nestjs/testing';
import { MensajesWsService } from './mensajes-ws.service';

describe('MensajesWsService', () => {
  let service: MensajesWsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajesWsService],
    }).compile();

    service = module.get<MensajesWsService>(MensajesWsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
