import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommentsModule, UserModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigService],
})
export class AppModule { }
