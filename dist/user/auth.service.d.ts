import { UsersService } from './users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signUp(email: string, password: string): Promise<any>;
    signIn(email: string, password: string): Promise<any>;
}
