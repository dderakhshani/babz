import { UserModel } from './models/user';


import "reflect-metadata"

import { createExpressServer, getMetadataArgsStorage, MetadataArgsStorage, RoutingControllersOptions, useContainer } from 'routing-controllers';

import * as swaggerUiExpress from 'swagger-ui-express'
const { defaultMetadataStorage } = require('class-transformer/cjs/storage');
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { routingControllersToSpec } from 'routing-controllers-openapi'

import { OrderController } from './controllers/order-controller';
import { ErrorHandler } from "./middlewares/error-handler";
import { LoggingMiddleware } from "./middlewares/logging";
import { AppConfig } from './config/app-config';
import config, { IConfig } from 'config';
import { IOCTYPES } from './ioc/inversify.types';
import { injectable, inject } from "inversify";
import * as express from 'express';
import { InversifyAdapter } from './ioc/ioc-adapter';
import { ProductController } from './controllers/product-controller';

//NOTE: These file can goes to lib

export interface IServer {

    listen(): void;

}

@injectable()
export class Server implements IServer {
    protected app: express.Application;

    public constructor(
        @inject(IOCTYPES.AppConfig) public appConfig: AppConfig,
    ) {
        const routingControllersOptions = {
            routePrefix: '/api',
            cors: true,
            defaultErrorHandler: false,
            controllers: [OrderController, ProductController],//Must load by path
            middlewares: [LoggingMiddleware, ErrorHandler],//Must load by path, LoggingMiddleware can goes to lib

        };

        this.app = createExpressServer(routingControllersOptions);

        const inversifyAdapter = new InversifyAdapter();

        useContainer(inversifyAdapter);

        this.useSwagger(routingControllersOptions);
    }

    listen() {
        this.app.listen(this.appConfig.server.port, () => {
            console.log(`App listening on the port ${this.appConfig.server.port}`);
        });
    }

    private useSwagger(routingControllersOptions: RoutingControllersOptions) {

        const schemas = validationMetadatasToSchemas({
            classTransformerMetadataStorage: defaultMetadataStorage,
            refPointerPrefix: '#/components/schemas',
        });

        const storage = getMetadataArgsStorage()
        const spec = routingControllersToSpec(storage, routingControllersOptions, {
            components: {
                schemas,
                securitySchemes: {
                    basicAuth: {
                        scheme: 'basic',
                        type: 'http',
                    },
                },
            },
            info: {
                description: 'Babz Application Api documentation',
                title: 'Babz Application API',
                version: '1.0.0',
            },
        })

        this.app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec))

        // Render spec on root:
        this.app.get('/', (_req, res) => {
            res.json(spec)
        })

    }
}


// const appConfig: AppConfig = config.util.toObject();
// console.log('Config:');
// console.log(appConfig);

// creates express app, registers all controller routes and returns you express app instance


// run express application on port 3000


