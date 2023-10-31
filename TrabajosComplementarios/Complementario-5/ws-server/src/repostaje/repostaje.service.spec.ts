import { Test, TestingModule } from '@nestjs/testing';
import { RepostajeService } from './repostaje.service';

describe('RepostajeService', () => {
  let service: RepostajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepostajeService],
    }).compile();

    service = module.get<RepostajeService>(RepostajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
