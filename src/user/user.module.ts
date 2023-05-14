import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {UserBcrytp} from "./user.bcrytp";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  exports: [UserService, UserBcrytp],
  providers: [UserService, UserBcrytp]
})
export class UserModule {}
