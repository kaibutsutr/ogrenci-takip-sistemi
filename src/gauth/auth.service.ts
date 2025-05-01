import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateFromEmail } from 'unique-username-generator';
import { GoogleUser } from './googleuser.entity';
import { createUserDto } from './dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
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

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerUser(user: createUserDto) {
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

  async findUserByEmail(email) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}