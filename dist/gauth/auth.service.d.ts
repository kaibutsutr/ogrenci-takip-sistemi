import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { GoogleUser } from './guser.entity';
import { createGoogleUserDto } from './dtos/create-user.dto';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<GoogleUser>);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<string>;
    registerGoogleUser(user: createGoogleUserDto): Promise<string>;
    findGoogleUserByEmail(email: any): Promise<GoogleUser>;
}
