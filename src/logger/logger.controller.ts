import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { LoggerService } from "./logger.service";

// Controller
@Controller('logs')
export class LoggerController {
    constructor(private readonly loggerService: LoggerService) { }

    @Get()
    logRequest() {
        this.loggerService.log(); // Instance mới cho mỗi request
    }
}
