import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { UserEntity } from "./user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./user.dto";
import * as _ from 'lodash';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private usersRepository: UserRepository 
    ) {}

    async getUsers(): Promise<UserEntity[]> {
        return await this.usersRepository.find();
    }

    async getUserById(id: number): Promise<UserEntity> {
        const foundUser = await this.usersRepository.findOne(id);
        if(!foundUser) throw new NotFoundException('Not found user');
        return foundUser;
    }

    async createUser(data: CreateUserDTO): Promise<UserEntity> {
        const newUser = this.usersRepository.create(_.omit(data, ['useType']));
        await newUser.save();
        return newUser;
    }

    async deleteUserById(id: number): Promise<UserEntity> {
        const foundUser = await this.getUserById(id);
        await this.usersRepository.delete(id);
        return foundUser;
    }
}