import { Body, Get, Post, JsonController, NotFoundError } from 'routing-controllers';
import { Credential } from '../models/credential';
import { UserModel } from '../models/user';
import { injectable, inject } from "inversify";
import jwt from 'jsonwebtoken';
import { IOCTYPES } from '../ioc/inversify.types';
import { AppConfig } from '../config/app-config';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi'
import bcrypt from 'bcrypt';

@JsonController('/auth')
@injectable()
export class AuthController {

    public constructor(
        @inject(IOCTYPES.AppConfig) public appConfig: AppConfig,
    ) {

    }

    @Post('/login')
    @ResponseSchema(UserModel)
    @OpenAPI({
        summary: 'Login User',
        description: 'Login User by username and password'
    })
    async login(@Body() cred: Credential) {

        console.log(`user name:${cred.username},password:${cred.password}`);
        let user = await UserModel.findOne({ username: cred.username });
        if (!user)
            throw new NotFoundError(`User was not found by given user name.`);

        const validPassword = await bcrypt.compare(cred.password, user.password);

        if (!validPassword)
            throw new NotFoundError(`Password is incorrec`);

        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            this.appConfig.jwt.secret,
            {
                expiresIn: this.appConfig.jwt.expiresIn,
                audience: cred.audiance,
                issuer: this.appConfig.jwt.secret
            }
        );

        const response = {
            username: cred.username,
            refreshToken: "",
            token: token
        };

        // save user token
        response.token = token;
        return response;
    }

    @Post('/loginByPhone')
    loginByPhone(@Body() cred: Credential) {
        console.log('POST auth/login');
        console.log(`user name:${cred.username},password:${cred.password}`);

        return 'Login Successfull';
    }
}

