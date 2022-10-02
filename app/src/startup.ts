process.env.NODE_CONFIG_DIR = './src/config'

import { iocContainer } from "./ioc/inversify.config";
import { IOCTYPES } from "./ioc/inversify.types";
import { IServer, Server } from "./server";


const server = iocContainer.get<IServer>(IOCTYPES.Server);

server.listen();