import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserMiddleware } from './middlewares/user.middleware';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, UserMiddleware)
      .forRoutes(UserController);
  }
}
