import { Test, TestingModule } from '@nestjs/testing';
import { InController } from './in.controller';
import { InService } from './in.service';

describe('InController', () => {
  let controller: InController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InController],
      providers: [InService],
    }).compile();

    controller = module.get<InController>(InController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
