import { createUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { updateUserDto } from './dtos/update-user.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(body: createUserDto, session: any): Promise<User>;
    signInUser(body: createUserDto, session: any): Promise<User>;
    signOut(session: any): void;
    whoisthis(user: User, session: any): Promise<User>;
    findUser(id: number): Promise<User>;
    findUsers(email: string): Promise<User[]>;
    updateUser(body: updateUserDto, id: number): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
