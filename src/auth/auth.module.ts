import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {UserBcrytp} from "../user/user.bcrytp";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AppModule} from "../app.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserBcrytp],
  imports: [UserModule,
      JwtModule.registerAsync({
          imports:[ConfigModule],
          global: true,
          useFactory: (configService: ConfigService) =>({
              secret: configService.get('JWT_SECRET'),
              signOptions: {
                  expiresIn: '3h'
              }
          }),
          inject: [ConfigService],

  })],
  exports: [UserBcrytp]
})
export class AuthModule {}
