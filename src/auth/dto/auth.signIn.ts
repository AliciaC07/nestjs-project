import {IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AuthSignIn{


    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({example: "pedrot@gmail.com"})
    email: string;

    @IsNotEmpty()
    @ApiProperty({example: "password"})
    password: string;

}