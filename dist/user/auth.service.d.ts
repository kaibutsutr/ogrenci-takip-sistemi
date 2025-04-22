import { UserService } from './user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signUp(email: string, password: string, name: string, surname: string, phone: string): Promise<any>;
    signIn(email: string, password: string): Promise<any>;
}
