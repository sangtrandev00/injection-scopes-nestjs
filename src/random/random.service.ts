import { Injectable } from "@nestjs/common";
import { Scope } from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT })
export class RandomGeneratorService {
    generate() {
        return Math.random();
    }
}
