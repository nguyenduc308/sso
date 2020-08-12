import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { CreateUserDTO } from "./user.dto";

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    async getUsers(): Promise<UserEntity[]> {
        return await this.userService.getUsers();
    }
    
    @Get('/stories')
    async getUserscontainStories(): Promise<any[]> {
        return await this.userService.getUserscontainStories();
    }

    @Get('/:id/stories')
    async getStoriesByUserId(@Param('id') id: number): Promise<UserEntity> {
        return await this.userService._getStoriesByUserId(id);
    }

    @Get('/:id')
    async getUserById(@Param('id') id: number): Promise<UserEntity> {
        return await this.userService.getUserById(id);
    }

    @Post()
    async createUser(@Body() data: CreateUserDTO): Promise<UserEntity> {
        return await this.userService.createUser(data)
    }

    @Delete('/:id')
    async deleteUserById(@Param('id') id: number): Promise<UserEntity> {
        return await this.userService.deleteUserById(id);
    }
}
