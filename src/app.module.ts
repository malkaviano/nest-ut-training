import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitTestingModule } from './unit-testing/unit-testing.module';
import { SomeModule } from './some/some.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UnitTestingModule,
    SomeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
