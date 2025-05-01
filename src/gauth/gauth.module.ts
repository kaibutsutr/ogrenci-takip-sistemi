import { Module } from '@nestjs/common';
import { GauthController } from './gauth.controller';

@Module({
  controllers: [GauthController]
})
export class GauthModule {}
