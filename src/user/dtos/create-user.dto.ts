import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class createUserDto {
  // validator package for emails
  @IsEmail()
  email: string;
  // validator package for string
  @IsString()
  password: string;
  // validator package for name
  @IsString()
  name: string;
  // validator package for surname
  @IsString()
  surname: string;
  @IsPhoneNumber()
  phone:number;
}
