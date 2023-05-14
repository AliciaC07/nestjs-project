import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {AuthSignIn} from "./dto/auth.signIn";
@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {


    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: AuthSignIn) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }


}
