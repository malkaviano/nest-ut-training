import { Injectable } from '@nestjs/common';

import { SomeRepository } from '../repositories/some.repository';
import { Some } from '../entities/some.entity';

@Injectable()
export class SomeService {
    constructor(private readonly repo: SomeRepository) {}

    async doSome(id: number): Promise<Some> {
        return this.repo.findOne(id);
    }
}
