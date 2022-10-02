import { IsEmail, IsString, Length } from "class-validator";
import { prop, getModelForClass } from '@typegoose/typegoose';

class UserSchema {
    @prop({ required: true })
    @IsString()//For Swagger schema generation & Validation
    @Length(5, 50)
    username: string;

    @prop()
    @IsString()//For Swagger schema generation & Validation
    password: string;

    @prop()
    @IsEmail()//For Swagger schema generation & Validation
    email: string;
}

export const UserModel = getModelForClass(UserSchema);
