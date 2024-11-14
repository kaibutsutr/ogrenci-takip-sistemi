import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

export class updateStudentDto {
  // validator package
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  surname: string;
  @IsOptional()
  @IsString()
  phone: string;
  @IsOptional()
  @IsString()
  guardian_name: string;
  @IsOptional()
  @IsString()
  guardian_surname: string;
  @IsOptional()
  @IsString()
  guardian_phone: string;
  @IsOptional()
  @IsString()
  address: string;
  @IsOptional()
  @IsString()
  school: string;
  @IsOptional()
  @IsNumber()
  grade: number;
  @IsOptional()
  @IsString()
  lectures: string;
  @IsOptional()
  @IsString()
  info: string;
}
