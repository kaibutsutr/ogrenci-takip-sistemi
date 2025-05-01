import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDto } from './dtos/create-user.dto';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<string>;
    registerUser(user: createUserDto): Promise<string>;
    findUserByEmail(email: any): Promise<User>;
}
