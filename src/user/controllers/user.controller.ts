import { Body, Controller, Get, InternalServerErrorException, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserRegisterRequestDto, UserRegisterResponseDto } from '../dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('register')
    @ApiCreatedResponse({ type: UserRegisterResponseDto })
    async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
        try {
            const user = await this.userService.create(data);
            return {
                user,
            };
        } catch (error) {
            throw new InternalServerErrorException('error', error);
        }
    }

    @Get()
    getUser(@Request() req) {
        return req.tokenPayload;
    }
}
