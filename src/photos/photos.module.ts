import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config';
import { PhotosController } from './controller/photos.controller';
import * as entities from './entities';
import { PhotosService } from './services/photos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(Object.values(entities)),
    MulterModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        dest: config.STORAGE_TMP,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule { }
