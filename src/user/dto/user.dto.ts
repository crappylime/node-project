import { UserModel } from '../models';

export class UserRegisterRequestDto {
    name: string;
    email: string;
    password: string;
}

export class UserRegisterResponseDto {
    user: UserModel;
}
