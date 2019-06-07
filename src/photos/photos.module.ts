import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigService } from '../config';
import { PhotosController } from './controller/photos.controller';
import { PhotosService } from './services/photos.service';

@Module({
  imports: [
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
