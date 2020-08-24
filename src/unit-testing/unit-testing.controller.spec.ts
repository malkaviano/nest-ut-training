import { Test, TestingModule } from '@nestjs/testing';
import { UnitTestingController } from './unit-testing.controller';

describe('UnitTestingController', () => {
  let controller: UnitTestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitTestingController],
    }).compile();

    controller = module.get<UnitTestingController>(UnitTestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
