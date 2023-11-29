import { Test, TestingModule } from '@nestjs/testing';
import { RepostajeController } from './repostaje.controller';
import { RepostajeService } from './repostaje.service';

describe('RepostajeController', () => {
  let controller: RepostajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepostajeController],
      providers: [RepostajeService],
    }).compile();

    controller = module.get<RepostajeController>(RepostajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
