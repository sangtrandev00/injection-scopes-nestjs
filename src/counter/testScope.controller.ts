import { Controller, Get, Scope, Inject } from '@nestjs/common';
import { RequestScopedService } from './requestScope.service';
import { TransientScopedService } from './transientScope.service';

@Controller('test-scope')
export class TestScopeController {
    constructor(
        private readonly requestScopedService: RequestScopedService,
        private readonly transientScopedService1: TransientScopedService,
        private readonly transientScopedService2: TransientScopedService,
    ) { }

    @Get()
    testScope(): any {
        return {
            requestScoped: this.requestScopedService.getId(),
            transient1: this.transientScopedService1.getId(),
            transient2: this.transientScopedService2.getId(),
        };
    }
}
