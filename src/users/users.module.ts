import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './users.controllers';

@Module({
    imports: [DatabaseModule],
    exports: [UsersModule],
    controllers: [UserController],
    providers: [],
})
export class UsersModule { }
