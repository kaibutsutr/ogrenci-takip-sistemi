import { UserService } from './user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signUp(email: string, password: string, ssid: string, phone: string): Promise<import("./user.entity").User>;
    signIn(email: string, password: string): Promise<import("./user.entity").User>;
}
