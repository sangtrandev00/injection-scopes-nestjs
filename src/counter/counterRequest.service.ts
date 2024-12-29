import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export class CounterService {
    private counter = 0;

    increment() {
        this.counter++;
        return this.counter;
    }
}
