import { Test, TestingModule } from '@nestjs/testing';
import { UnitTestingService } from './unit-testing.service';
import { Rules } from '../business/rules';

// Jest auto mock feature
jest.mock('../business/rules');

describe('UnitTestingService', () => {
  let service: UnitTestingService;

  // Create a mock instance
  const rules = new Rules();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnitTestingService,
        // Pass the mock as a dependency
        {
          provide: Rules,
          useValue: rules,
        },
      ],
    }).compile();

    service = module.get<UnitTestingService>(UnitTestingService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#applyRule', () => {
    // Our fixtures, the test and result are the same, avoid duplication of code.
    [
      ['xpto', 'too small' ],
      [ undefined, 'no string' ],
    ].forEach(([str, value ]) => {
      it('return false', () => {
        // Set desired behaviour
        jest.spyOn(rules, 'apply').mockReturnValue(value);

        expect(service.applyRule(str)).toBe(false);
      })
    })


    it('return true', () => {
      // Set desired behaviour
      jest.spyOn(rules, 'apply').mockReturnValue('xptoshould');

      expect(service.applyRule('xptoshouldbetruenow')).toBe(true);
    })
  });

  // Sometimes there's no return value, so we can assert the function was called
  describe('#fireAndForget', () => {
    it('should call rules#fireAndForget', () => {
      jest.spyOn(rules, 'fireAndForget');

      service.fireAndForget(1);

      expect(rules.fireAndForget).toHaveBeenCalled();
    })

    it('should not call rules#fireAndForget', () => {
      jest.spyOn(rules, 'fireAndForget');

      service.fireAndForget(0);

      expect(rules.fireAndForget).not.toBeCalled();
    })
  });
});
