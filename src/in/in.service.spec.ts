import { Test, TestingModule } from '@nestjs/testing';
import { InService } from './in.service';

describe('InService', () => {
  let service: InService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InService],
    }).compile();

    service = module.get<InService>(InService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
