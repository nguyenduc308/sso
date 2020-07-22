import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { UserEntity } from "./user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private _userRepo: UserRepository 
    ) {}
    async getUsers(): Promise<UserEntity[]> {
        return await this._userRepo.find();
    }
}