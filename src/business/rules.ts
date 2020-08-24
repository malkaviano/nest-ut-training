import { Injectable } from "@nestjs/common";

@Injectable()
export class Rules {
    applyRule(str: string): string {
        if (str) {
            return str.length > 10 ? String.prototype.substring(0, 10) : 'too small';
        }

        return 'no string';
    }

    fireAndForget(): void {
        // This should not affect the test.
        throw new Error("Method not implemented.");
    }

    static create(): Rules {
        return new Rules();
    }
}