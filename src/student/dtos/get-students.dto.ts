import { IsDate, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { BeforeInsert } from 'typeorm';

export class GetStudentsDto {
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
  @IsDate()
  public registration_date: Date;
}
