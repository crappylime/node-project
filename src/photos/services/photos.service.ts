import { Injectable } from '@nestjs/common';
import { rename } from 'fs';
import { extname, join } from 'path';
import { promisify } from 'util';
const renameAsync = promisify(rename);
import * as crypto from 'crypto';
import { ConfigService } from '../../config';

@Injectable()
export class PhotosService {
    constructor(private config: ConfigService) { }
    async create(file) {
        // TODO validate is photo
        const fileName = crypto
            .createHash('md5')
            .update(file.path)
            .digest('hex') + extname(file.originalname).toLowerCase();
        await renameAsync(file.path, join(this.config.STORAGE_PHOTOS, fileName));
        return {
            fileName,
        };
    }
}
