import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../user.service';
declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
        }
    }
}
export declare class CurrentUserMiddleware implements NestMiddleware {
    private userService;
    constructor(userService: UserService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
