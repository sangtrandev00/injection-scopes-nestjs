
import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

@Injectable({ scope: Scope.TRANSIENT })
export class HelloService {
    constructor(@Inject(INQUIRER) private parentClass: object) { }

    sayHello(message: string) {
        console.log(`${this.parentClass?.constructor?.name}: ${message}`);
    }
}

// vẫn chưa hiểu dùng từ khoá Inquirer khi nào ? Khi muốn lấy gốc service gọi method (parent class)