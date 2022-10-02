import { Request, Response } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { injectable, inject } from "inversify";

@Middleware({ type: 'before' })
@injectable()
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: Request, Response: Response, next: (err: any) => any) {
        console.log('Error Occured:');
        console.log(error);
        next(error);
    }
}