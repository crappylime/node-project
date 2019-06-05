import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { logger } from './middlewares/logger.middleware';
import { UserMiddleware } from './middlewares/user.middleware';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger, UserMiddleware)
      .forRoutes(UserController);
  }
}
