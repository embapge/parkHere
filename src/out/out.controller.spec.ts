import { Test, TestingModule } from '@nestjs/testing';
import { OutController } from './out.controller';
import { OutService } from './out.service';

describe('OutController', () => {
  let controller: OutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutController],
      providers: [OutService],
    }).compile();

    controller = module.get<OutController>(OutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
