import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [CommentsModule, UserModule, ConfigModule, PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
