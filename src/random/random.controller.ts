import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { RandomGeneratorService } from "./random.service";

// Controller
@Controller('random')
export class RandomController {
    constructor(private readonly randomGeneratorService: RandomGeneratorService) { }

    @Get()
    getRandom() {
        return this.randomGeneratorService.generate(); // Instance mới mỗi lần gọi
    }
}
