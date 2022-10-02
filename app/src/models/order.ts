import { IsEmail, IsString, Length } from "class-validator";
import { prop, getModelForClass } from '@typegoose/typegoose';

class OrderSchema {

}

export const OrderModel = getModelForClass(OrderSchema);
