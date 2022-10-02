import { Action, ClassConstructor, IocAdapter } from 'routing-controllers';
import { Container } from 'inversify';
import { iocContainer } from './inversify.config';

export class InversifyAdapter implements IocAdapter {
    constructor() { }

    get<T>(someClass: ClassConstructor<T>, action?: Action): T {
        const childContainer = iocContainer.createChild();

        return childContainer.resolve<T>(someClass);
    }
}