import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
    private users: User[] = [
        new User(2, "john.doe@example.com", "password123", "user"),
        new User(3, "jane.smith@example.com", "password123", "user"),
        new User(4, "alice.jones@example.com", "password123", "user"),
        new User(5, "bob.brown@example.com", "password123", "user"),
        new User(6, "charlie.davis@example.com", "password123", "user"),
        new User(7, "david.evans@example.com", "password123", "user"),
        new User(8, "eve.franklin@example.com", "password123", "user"),
        new User(9, "frank.green@example.com", "password123", "user"),
        new User(10, "grace.harris@example.com", "password123", "user"),
        new User(11, "henry.ivanov@example.com", "password123", "user"),
    ]

        async findOne(email: string): Promise < User | undefined > {
            return this.users.find(user => user.email === email);
        }

    async findById(id: number): Promise < User | undefined > {
            return this.users.find(user => user.id === id);
        }
    async findAll(): Promise < User[] > {
            return this.users;
        }

    async create(user: User): Promise < User > {
            this.users.push(user);
            return user;
        }
}
