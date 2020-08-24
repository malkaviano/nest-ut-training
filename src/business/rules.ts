import { Injectable } from "@nestjs/common";

@Injectable()
export class Rules {
    apply(str: string): string {
        if (str) {
            return str.length > 10 ? String.prototype.substring(0, 10) : 'too small';
        }

        return 'no string';
    }

    static create(): Rules {
        return new Rules();
    }
}