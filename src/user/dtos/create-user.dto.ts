import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class createUserDto {
  // validator package for emails
  @IsEmail()
  email: string;
  // validator package for string
  @IsString()
  password: string;
  // validator package for name
  @IsOptional
  @IsString()
  name: string;
  // validator package for surname
  @IsOptional
  @IsString()
  surname: string;
  @IsOptional
  @IsPhoneNumber()
  phone: string;
}
