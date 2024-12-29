import { Module } from '@nestjs/common';
import { CounterService as SingletonService } from './counterSingleton.service';
import { CounterService as RequestService } from './counterRequest.service';
import { SingletonController } from './singleton.controller';
import { RequestController } from './request.controller';

@Module({
    providers: [SingletonService, RequestService],
    controllers: [SingletonController, RequestController],
})
export class CounterModule { }
// Module counter phân biệt sự khác nhau giữa single ton và request scope