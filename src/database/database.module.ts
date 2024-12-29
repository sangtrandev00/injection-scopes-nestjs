import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
    providers: [
        {
            provide: 'DatabaseService',
            useClass: DatabaseService
        }
    ],
    exports: [
        'DatabaseService'
    ]
})
export class DatabaseModule { }
