import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitTestingModule } from './unit-testing/unit-testing.module';

@Module({
  imports: [UnitTestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
