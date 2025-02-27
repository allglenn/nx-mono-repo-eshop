import { Controller, Get, Post, Body } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }
}