import { Global, Injectable } from '@nestjs/common';

@Global()
@Injectable()
export class ConfigService {
    JWT_SECRET = 'jwt-secret';
}
