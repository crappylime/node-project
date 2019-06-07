import { Injectable } from '@nestjs/common';
import { rename } from 'fs';
import { extname, join } from 'path';
import { promisify } from 'util';
const renameAsync = promisify(rename);
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { ConfigService } from '../../config';
import { PhotoEntity } from '../entities';

@Injectable()
export class PhotosService {
    constructor(
        private config: ConfigService,

        @InjectRepository(PhotoEntity)
        private readonly photoRepository: Repository<PhotoEntity>,
    ) { }

    async create(file) {
        // TODO validate is photo
        const fileName = crypto
            .createHash('md5')
            .update(file.path)
            .digest('hex') + extname(file.originalname).toLowerCase();
        await renameAsync(file.path, join(this.config.STORAGE_PHOTOS, fileName));

        const photo = new PhotoEntity();
        photo.filename = fileName;
        photo.description = file.originalname;
        await this.photoRepository.save(photo);

        return {
            photo,
        };
    }

    async findAll() {
        return this.photoRepository.find();
    }
}
