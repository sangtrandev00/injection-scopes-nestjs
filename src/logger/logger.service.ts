import { Scope } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

// Extend the Request interface
declare global {
    namespace Express {
        interface Request {
            id?: string; // Add the id property
        }
    }
}

/*
Mô tả:
Mỗi yêu cầu (HTTP request) tạo ra một instance mới của provider.
Phù hợp với các tình huống mà dữ liệu hoặc trạng thái cần được gắn kết với từng request cụ thể.
*/

@Injectable({ scope: Scope.REQUEST })
export class LoggerService {
    constructor(@Inject(REQUEST) private readonly request: Request) { }

    log() {
        // Log the request ID
        console.log(`Request ID: ${this.request.id}`);
    }
}
