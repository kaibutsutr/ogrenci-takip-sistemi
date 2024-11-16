import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../user.service';

import { User } from '../user.entity';

declare global {
  // change the Request interface by adding a new property so we can use this property in Request body
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.session || {}; // return empty instead of undefined
    if (id) {
      const user = await this.userService.findOne(id);
      req.currentUser = user; // assing user as current user in session
    }
    next(); // call next function
  }
}
