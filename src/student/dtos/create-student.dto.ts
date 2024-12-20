import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsString()
  phone: string;
  @IsString()
  guardian_name: string;
  @IsString()
  guardian_surname: string;
  @IsString()
  guardian_phone: string;
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
  public registration_date: Date;
}
