import { Repository } from 'typeorm';
import { GoogleUser } from './googleuser.entity';
import { createUserDto } from './dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<GoogleUser>);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<string>;
    registerUser(user: createUserDto): Promise<string>;
    findUserByEmail(email: any): Promise<GoogleUser>;
}
