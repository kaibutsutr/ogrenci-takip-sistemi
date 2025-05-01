import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { RegisterUserDto } from '../user/dtos/create-user.dto';
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<string>;
    registerUser(user: RegisterUserDto): Promise<string>;
    findUserByEmail(email: any): Promise<any>;
}
