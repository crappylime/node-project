import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    JWT_SECRET = 'jwt-secret';
    TOKEN_HEADER_NAME = 'api_token';
}
