import { Injectable, NestMiddleware } from '@nestjs/common';
import { UserRole } from '../models';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    return (req, res, next) => {
      req.tokenPayload = {
        user: {
          id: 1,
          name: 'Piotr',
          roles: [UserRole.ADMIN],
        },
      };
      next();
    }
  }
}
