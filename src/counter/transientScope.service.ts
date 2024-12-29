import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientScopedService {
    private readonly id: number;

    constructor() {
        this.id = Math.random(); // Tạo một giá trị ngẫu nhiên cho instance
    }

    getId(): number {
        return this.id;
    }
}
