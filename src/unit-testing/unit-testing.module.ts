import { Module } from '@nestjs/common';
import { UnitTestingService } from './unit-testing.service';
import { UnitTestingController } from './unit-testing.controller';
import { Rules } from '../business/rules';

@Module({
  providers: [
    UnitTestingService,
    // Not recommended, just showing sintax options to help with mocking
    {
      provide: Rules,
      useFactory: Rules.create,
    }
  ],
  controllers: [UnitTestingController]
})
export class UnitTestingModule {}
