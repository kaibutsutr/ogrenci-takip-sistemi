import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { GoogleUser } from './guser.entity';
import { createUserDto } from './dtos/create-user.dto';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<GoogleUser>);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<string>;
    registerUser(user: createUserDto): Promise<string>;
    findUserByEmail(email: any): Promise<GoogleUser>;
}
