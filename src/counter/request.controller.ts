import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { CounterService } from "./counterRequest.service";

@Controller('request')
export class RequestController {
    constructor(private readonly counterService: CounterService) { }

    @Get()
    incrementCounter() {
        return this.counterService.increment();
    }

    @Get('request')
    incrementCounterV2() {
        return this.counterService.increment();
    }
}
