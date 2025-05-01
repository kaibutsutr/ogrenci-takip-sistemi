import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleUser } from './googleuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GoogleUser])], // create repo for User entity
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class GauthModule {}
