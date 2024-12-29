import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

// Controller
@Controller('users')
export class UserController {
    constructor(private readonly databaseService: DatabaseService) { }

    @Get()
    getUsers() {
        return this.databaseService.getConnection(); // Cùng một instance
    }
}
