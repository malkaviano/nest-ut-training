import { Test, TestingModule } from '@nestjs/testing';

import { mock, instance, when, anyNumber } from 'ts-mockito';

import { SomeService } from './some.service';
import { SomeRepository } from '../repositories/some.repository';
import { Some } from '../entities/some.entity';

describe('SomeService', () => {
  let service: SomeService;
  const mockedRepo = mock(SomeRepository);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SomeService,
        {
          provide: SomeRepository,
          useValue: instance(mockedRepo),
        }
      ],
    }).compile();

    service = module.get<SomeService>(SomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#doSome', () => {
    it('returns some object', async() => {
      const expected = new Some();
      expected.id = 1;
      expected.name = 'John';

      /*
        Critique: why is bad to mock others library?
        1 - You should understand internals to know what to return;
        2 - If the lib change in an update, your test is wrong

        Solution: Create an abstration between your code and others code.
      */
      when(mockedRepo.findOne(anyNumber())).thenResolve(expected);

      await expect(service.doSome(1)).resolves.toEqual(expected);
    })

    it('returns null', async() => {
      when(mockedRepo.findOne(anyNumber())).thenResolve(null);

      await expect(service.doSome(1)).resolves.toBeNull();
    })
  });
});
