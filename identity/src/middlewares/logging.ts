import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response } from 'express';
import { injectable, inject } from "inversify";

@Middleware({ type: 'before' })
@injectable()
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: (err: any) => any): void {
        console.log(`Request ${request.method} to ${request.url}`);
        next("");
    }
}