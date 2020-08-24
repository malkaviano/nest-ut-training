import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SomeService } from './some.service';
import { SomeRepository } from '../repositories/some.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([SomeRepository]),
  ],
  providers: [
    SomeService
  ]
})
export class SomeModule {}
