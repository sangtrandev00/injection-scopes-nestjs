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

@Injectable({ scope: Scope.REQUEST })
export class LoggerService {
    constructor(@Inject(REQUEST) private readonly request: Request) { }

    log() {
        // Log the request ID
        console.log(`Request ID: ${this.request.id}`);
    }
}
