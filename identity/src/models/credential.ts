import { IsString } from "class-validator";

export class Credential {
    @IsString()//For Swagger schema generation
    username: string;

    @IsString()
    password: string;

    @IsString()
    audiance: string;
}