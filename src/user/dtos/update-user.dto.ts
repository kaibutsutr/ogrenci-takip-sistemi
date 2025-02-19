import { IsEmail, IsOptional, IsString,IsPhoneNumber } from 'class-validator';

export class updateUserDto {
  // validator package for emails
  @IsOptional() // optional to fill this
  @IsEmail()
  email: string;
  // validator package for string
  @IsOptional() // optional to fill this
  @IsString()
  password: string;
  @IsString()
    name: string;
    // validator package for surname
    @IsString()
    surname: string;
    @IsPhoneNumber()
    phone:number;
}
