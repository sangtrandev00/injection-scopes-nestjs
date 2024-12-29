import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { CounterService } from "./counterSingleton.service";

@Controller('singleton')
export class SingletonController {
    constructor(private readonly counterService: CounterService) { }

    @Get()
    incrementCounter() {
        return this.counterService.increment();
    }
}
