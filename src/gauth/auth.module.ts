import { Module } from '@nestjs/common';
import { GauthController } from './auth.controller';
import { GauthService } from './auth.service';

@Module({
  controllers: [GauthController],
  providers: [GauthService],
})
export class GauthModule {}
