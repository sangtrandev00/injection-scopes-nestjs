import { v4 as uuidv4 } from 'uuid';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        req.id = uuidv4(); // Attach a unique ID to the request
        next();
    }
}
