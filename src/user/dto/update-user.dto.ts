import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, IsNotEmpty, IsPhoneNumber, MinLength} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
}
