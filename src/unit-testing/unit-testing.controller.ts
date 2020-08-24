import { Controller, Get, BadRequestException, Param } from '@nestjs/common';
import { UnitTestingService } from './unit-testing.service';

@Controller('unit-testing')
export class UnitTestingController {
    constructor(private readonly service:UnitTestingService) {}

    @Get('rules/:str')
    applyRule(@Param('str') str: string): any {
        const result = this.service.applyRule(str);

        if (result) {
            return { status: 'ok' };
        }

        throw new BadRequestException('bad string');
    }
}
