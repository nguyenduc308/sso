import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Controller('users')
export class UserController {
    constructor(
        private _userService: UserService
    ) {}
    @Get()
    async getUsers(): Promise<UserEntity[]> {
        return await this._userService.getUsers();
    }
}
