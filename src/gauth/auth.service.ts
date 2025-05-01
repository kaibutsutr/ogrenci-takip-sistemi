import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateFromEmail } from 'unique-username-generator';
import { GoogleUser } from './guser.entity';
import { createGoogleUserDto } from './dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(GoogleUser)
    private userRepository: Repository<GoogleUser>,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findGoogleUserByEmail(user.email);

    if (!userExists) {
      return this.registerGoogleUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerGoogleUser(user: createGoogleUserDto) {
    try {
      const newGoogleUser = this.userRepository.create(user);
      newGoogleUser.name = generateFromEmail(user.email, 5);

      await this.userRepository.save(newGoogleUser);

      return this.generateJwt({
        sub: newGoogleUser.id,
        email: newGoogleUser.email,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findGoogleUserByEmail(email) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}
