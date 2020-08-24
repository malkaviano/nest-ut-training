import { Injectable } from '@nestjs/common';

import { Rules } from '../business/rules';

@Injectable()
export class UnitTestingService {
    constructor(private readonly rules: Rules) {}

    applyRule(str: string): boolean {
        const result = this.rules.apply(str);

        return !(result === 'too small' || result === 'no string');
    }
}
