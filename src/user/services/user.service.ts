import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from '../dto';
import { UserModel } from '../models';

@Injectable()
export class UserService {
    users: UserModel[] = [];

    async create(data: UserRegisterRequestDto): Promise<UserModel> {
        const user: UserModel = {
            id: this.users.length + 1,
            email: data.email,
            name: data.name,
            password: data.password,
            roles: [],
        };
        this.users.push(user);
        return user;
    }
}
