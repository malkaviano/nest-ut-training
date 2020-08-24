import { Test, TestingModule } from '@nestjs/testing';
import { UnitTestingService } from './unit-testing.service';
import { Rules } from '../business/rules';


const mockApplyRule = jest.fn();
const mockFireAndForget = jest.fn();

jest.mock('../business/rules', () => {
  return {
    Rules: jest.fn().mockImplementation(
      () => ({
        applyRule: mockApplyRule,
        fireAndForget: mockFireAndForget,
      })
    ),
  }
});

describe('UnitTestingService', () => {
  let service: UnitTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnitTestingService,
        // Pass the mock as a dependency
        {
          provide: Rules,
          useClass: Rules,
        },
      ],
    }).compile();

    service = module.get<UnitTestingService>(UnitTestingService);
  });

  afterEach(() => {
    mockFireAndForget.mockClear();
    mockApplyRule.mockClear();
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#applyRule', () => {
    // Our fixtures, the test and result are the same, avoid duplication of code.
    [
      ['xpto', 'too small'],
      [undefined, 'no string'],
    ].forEach(([str, value]) => {
      it('return false', () => {
        mockApplyRule.mockImplementation(() => value);

        expect(service.applyRule(str)).toBe(false);
      })
    })


    it('return true', () => {
      mockApplyRule.mockImplementation(() => 'xptoshould');

      expect(service.applyRule('xptoshouldbetruenow')).toBe(true);
    })
  });

  // Sometimes there's no return value, so we can assert the function was called
  describe('#fireAndForget', () => {
    it('should call rules#fireAndForget', () => {
      service.fireAndForget(1);

      expect(mockFireAndForget.mock.calls.length).toBe(1);
    })

    it('should not call rules#fireAndForget', () => {
      service.fireAndForget(0);

      expect(mockFireAndForget.mock.calls.length).toBe(0);
    })
  });
});
