import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsNumber()
  phone: number;
  @IsString()
  guardian_name: string;
  @IsString()
  guardian_surname: string;
  @IsNumber()
  guardian_phone: number;
  @IsString()
  address: string;
  @IsString()
  school: string;
  @IsNumber()
  grade: number;
  @IsString()
  lectures: string;
  @IsString()
  info: string;
}
