import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleUser } from './googleuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([GoogleUser]), JwtModule], // create repo for GUser entity
  controllers: [AuthController],
  providers: [AuthService],
})
export class GauthModule {}
