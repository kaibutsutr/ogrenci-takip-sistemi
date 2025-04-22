import { createUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { updateUserDto } from './dtos/update-user.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(body: createUserDto, session: any): Promise<any>;
    signInUser(body: createUserDto, session: any): Promise<any>;
    signOut(session: any): void;
    whoisthis(user: User): Promise<User>;
    findUser(id: number): Promise<any>;
    findUsers(email: string): Promise<any>;
    updateUser(body: updateUserDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
