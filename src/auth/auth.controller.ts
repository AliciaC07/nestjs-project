import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {AuthSignIn} from "./dto/auth.signIn";
import {AuthGuard} from "./auth.guard";
import Any = jasmine.Any;
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
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }


}
