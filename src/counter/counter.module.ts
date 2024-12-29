import { Module } from '@nestjs/common';
import { CounterService as SingletonService } from './counterSingleton.service';
import { CounterService as RequestService } from './counterRequest.service';
import { SingletonController } from './singleton.controller';
import { RequestController } from './request.controller';
import { TestScopeController } from './testScope.controller';
import { RequestScopedService } from './requestScope.service';
import { TransientScopedService } from './transientScope.service';

@Module({
    providers: [SingletonService, RequestService, RequestScopedService, TransientScopedService],
    controllers: [SingletonController, RequestController, TestScopeController],
})
export class CounterModule { }
// Module counter phân biệt sự khác nhau giữa single ton và request scope