import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {bcryptAuth} from "../auth/auth.bcrypt";


@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
  private usersRepository: Repository<User>,
      )
  {}
  create(createUserDto: CreateUserDto) {
    // const password = this.encrypt.encrypt(createUserDto.password);
    // console.log('Encrypt:',password);
    // createUserDto.password = password;
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto);
  }

  async remove(id: number) {

    return `This action removes a #${id} user`;
  }
}
