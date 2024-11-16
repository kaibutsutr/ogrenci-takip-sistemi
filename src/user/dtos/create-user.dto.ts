import { IsEmail, IsString } from 'class-validator';

export class createUserDto {
  // validator package for emails
  @IsEmail()
  email: string;
  // validator package for string
  @IsString()
  password: string;
  @IsString()
  phone: string;
  @IsString()
  ssid: string;
}
