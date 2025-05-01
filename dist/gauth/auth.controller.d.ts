import { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    auth(): Promise<void>;
    googleAuthCallback(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
