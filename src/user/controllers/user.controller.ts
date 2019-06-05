import { AuthGuard } from './../guards/auth.guard';
import { Body, Controller, Get, InternalServerErrorException, Post, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Roles } from '../decorators/roles.decorator';
import { User } from '../decorators/user.decorator';
import { UserRegisterRequestDto, UserRegisterResponseDto } from '../dto';
import { UserRole } from '../models';
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
    @UseGuards(AuthGuard)
    @Roles(UserRole.ADMIN)
    getUser(@User() user) {
        return user;
    }
}
