import { Test, TestingModule } from '@nestjs/testing';
import { OutService } from './out.service';

describe('OutService', () => {
  let service: OutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutService],
    }).compile();

    service = module.get<OutService>(OutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
