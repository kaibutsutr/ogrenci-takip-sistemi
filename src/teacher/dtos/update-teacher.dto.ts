import { Column } from 'typeorm';
import { IsString, IsOptional } from 'class-validator';
export class UpdateTeacherDto {
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
  lectures: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  level: string;
}
