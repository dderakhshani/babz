import { Body, Get, Post, JsonController, NotFoundError } from 'routing-controllers';
import { UserModel } from '../models/user';
import { injectable, inject } from "inversify";
import jwt from 'jsonwebtoken';
import { IOCTYPES } from '../ioc/inversify.types';
import { AppConfig } from '../config/app-config';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi'
import bcrypt from 'bcrypt';

@JsonController('/order')
@injectable()
export class OrderController {

    public constructor(
        @inject(IOCTYPES.AppConfig) public appConfig: AppConfig,
    ) {

    }


}

