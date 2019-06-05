import { ApiModelProperty } from '@nestjs/swagger';
import { UserModel } from '../models';

export class UserRegisterRequestDto {
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
}

export class UserRegisterResponseDto {
    @ApiModelProperty()
    user: UserModel;
}
