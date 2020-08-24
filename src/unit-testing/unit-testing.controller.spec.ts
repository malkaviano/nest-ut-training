import { Test, TestingModule } from '@nestjs/testing';

import { UnitTestingController } from './unit-testing.controller';
import { UnitTestingService } from './unit-testing.service';
import { BadRequestException } from '@nestjs/common';

const mockApplyRule = jest.fn();

jest.mock('./unit-testing.service', () => {
    return {
        UnitTestingService: jest.fn().mockImplementation(
            () => ({ applyRule: mockApplyRule })
        ),
    }
});

describe('UnitTestingController', () => {
    let controller: UnitTestingController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UnitTestingController],
            providers: [
                {
                    provide: UnitTestingService,
                    useClass: UnitTestingService,
                }
            ]
        }).compile();

        controller = module.get<UnitTestingController>(UnitTestingController);
    });

    afterEach(() => {
        mockApplyRule.mockClear();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('#applyRule', () => {
        it('should return status OK', () => {
            mockApplyRule.mockImplementation(() => true);

            expect(controller.applyRule('nice')).toEqual({ "status": "ok" });
        });

        it('should throw BadRequest', () => {
            mockApplyRule.mockImplementation(() => false);

            expect(() => controller.applyRule('notnice')).toThrow(BadRequestException);
        });
    });
});
