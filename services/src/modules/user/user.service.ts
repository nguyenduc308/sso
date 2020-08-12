import { InjectRepository } from "@nestjs/typeorm";
import * as _ from 'lodash';
import * as path from 'path';

import { UserRepository } from "./user.repository";
import { UserEntity } from "./user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./user.dto";
import { StoryEntity } from "../story/story.entity";
import { Connection } from "typeorm";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private usersRepository: UserRepository,
        private connection: Connection 
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

    async getUserscontainStories(): Promise<any[]> {
        //SELECT * FROM USER
        //LEFT JOIN story ON user.id = story.user_id;
        const users = await this.connection
                                .getRepository(UserEntity)
                                .createQueryBuilder('user')
                                .leftJoinAndSelect('user.stories', 'story')
                                .getMany();
        return users;
    }

    async getStoriesByUserId(id: number): Promise<any> {
        const user = await this.connection
                            .getRepository(UserEntity)
                            .createQueryBuilder('user')
                            .where({ id })
                            .leftJoinAndSelect('user.stories', 'story')
                            .getOne();
        return user;
    }

    async _getStoriesByUserId(id: number): Promise<any> {
        const sqlQuery = `
            SELECT
                *
            FROM 
                USER LEFT JOIN story ON user.id = story.user_id
            WHERE 
                USER.id = ${id};
        `;

        // const sqlPath = path.join(__dirname, '..', '..','sql', 'query-stories-by-user.sql');
        // const sqlQuery = _.template(require(sqlPath))({user_id: id});

        const sqlRecords = await this.connection.query(sqlQuery);

        const firstRec = sqlRecords[0];
        const user = _.pick(firstRec, ['user_id', 'email']);
        
        return _.assign(user, {stories : sqlRecords});
    }

}