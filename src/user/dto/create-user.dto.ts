import {Column} from "typeorm";
import {IsEmail, IsNotEmpty, IsPhoneNumber, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({example: "Pedro"})
    name: string;

    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({example: "Torres"})
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({example: "pedrot@gmail.com"})
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    @ApiProperty({example: "809-563-8574"})
    phone: string;

    @IsNotEmpty()
    @ApiProperty({example: "Masculino"})
    gender: string;

    @IsNotEmpty()
    @ApiProperty({example: "password"})
    password: string;

    @IsNotEmpty()
    @ApiProperty({example: "Doctor"})
    role: string;

}
