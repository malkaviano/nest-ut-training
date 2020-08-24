import { Test, TestingModule } from '@nestjs/testing';
import { UnitTestingService } from './unit-testing.service';

describe('UnitTestingService', () => {
  let service: UnitTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitTestingService],
    }).compile();

    service = module.get<UnitTestingService>(UnitTestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
