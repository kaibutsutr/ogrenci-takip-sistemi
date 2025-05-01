import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class createUserDto {
  // validator package for emails
  @IsEmail()
  email: string;
  // validator package for string

  @IsString()
  name: string;
  // validator package for surname
}
