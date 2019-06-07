import { Module } from '@nestjs/common';
import { PhotosController } from './controller/photos.controller';
import { PhotosService } from './services/photos.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
