import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import config from '../../config/config';
import { User } from '../../user/user.entity';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    super({
      clientID:
        '642889385801-rsts3vsdgfoetjr8h0qq812v8h3n1hr8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8080/api/auth/google/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;

    const user = {
      provider: 'google',
      providerId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value,
    };

    done(null, user);
  }
}
