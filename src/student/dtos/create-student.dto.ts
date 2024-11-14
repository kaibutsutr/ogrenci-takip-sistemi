import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateStudentDto {
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  name: string;
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
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
