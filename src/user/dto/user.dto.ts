import { ApiModelProperty } from '@nestjs/swagger';
import { UserModel } from '../models';

export class UserRegisterRequestDto {
    @ApiModelProperty({
        example: 'User123',
    })
    name: string;
    @ApiModelProperty({
        example: 'user@example.com',
    })
    email: string;
    @ApiModelProperty({
        example: 'password123',
    })
    password: string;
}

export class UserRegisterResponseDto {
    @ApiModelProperty()
    user: UserModel;
}
