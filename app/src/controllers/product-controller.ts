import { ProductModel } from './../models/product';
import { Body, Get, Post, JsonController, NotFoundError, Param } from 'routing-controllers';

import { injectable, inject } from "inversify";
import jwt from 'jsonwebtoken';
import { IOCTYPES } from '../ioc/inversify.types';
import { AppConfig } from '../config/app-config';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi'
import bcrypt from 'bcrypt';
import { CreateProductCommand } from '../cqrs/commands/create-product-command';

@JsonController('/product')
@injectable()
export class ProductController {

    public constructor(
        @inject(IOCTYPES.AppConfig) public appConfig: AppConfig,
    ) {

    }

    @Post('/')
    add(@Body() product: CreateProductCommand) {

        return 'Add Successfull';
    }

    @Get('/')
    async getAll() {
        return await ProductModel.find();
    }

    @Get('/:id')
    async getOne(@Param('id') id: string) {
        return await ProductModel.findOne({ _id: id });
    }

}

