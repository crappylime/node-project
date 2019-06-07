import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class ConfigService {
    readonly JWT_SECRET = 'jwt-secret';
    readonly TOKEN_HEADER_NAME = 'api_token';

    readonly STORAGE_TMP = resolve(__dirname, '../../storage/tmp');
    readonly STORAGE_PHOTOS = resolve(__dirname, '../../assets/photos');
    readonly PHOTOS_BASE_PATH = '/photos';

    readonly DB_NAME = resolve(__dirname, '../../storage/databases/db.sql');

}
