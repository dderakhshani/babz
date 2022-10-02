import { IServer, Server } from '../server';
import { AppConfig } from './../config/app-config';
import { Container } from "inversify";
import { IOCTYPES } from "./inversify.types";

import config, { IConfig } from 'config';
import { ErrorHandler } from '../middlewares/error-handler';
import { LoggingMiddleware } from '../middlewares/logging';
const appConfig: AppConfig = config.util.toObject();


const iocContainer = new Container();

iocContainer.bind<AppConfig>(IOCTYPES.AppConfig).toConstantValue(appConfig);
iocContainer.bind<IServer>(IOCTYPES.Server).to(Server);

export { iocContainer };