import { Injectable } from "@nestjs/common";

@Injectable()
export class CounterService {
    private counter = 0;

    increment() {
        this.counter++;
        return this.counter;
    }
}
