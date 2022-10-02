import { IsEmail, IsString, Length } from "class-validator";
import { prop, getModelForClass } from '@typegoose/typegoose';

class ProductSchema {

}

export const ProductModel = getModelForClass(ProductSchema);
