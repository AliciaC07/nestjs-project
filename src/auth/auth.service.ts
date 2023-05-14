import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {UserBcrytp} from "../user/user.bcrytp";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService,
                private bcrypt: UserBcrytp,
                ) {
    }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        if (this.bcrypt.validateHash(pass, user.password) !== true) {
            throw new UnauthorizedException();
        }
        const payload = {
            email: user.email, sub: user.id
        };
        return {
            access_token: await  this.jwtService.signAsync(payload),
        };
    }
}
