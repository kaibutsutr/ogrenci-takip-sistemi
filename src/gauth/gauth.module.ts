import { Module } from '@nestjs/common';
import { GauthController } from './gauth.controller';
import { GauthService } from './gauth.service';

@Module({
  controllers: [GauthController],
  providers: [GauthService]
})
export class GauthModule {}
