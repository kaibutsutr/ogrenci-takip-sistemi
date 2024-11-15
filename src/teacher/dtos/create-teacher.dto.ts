import { IsString } from 'class-validator';
export class CreateTeacherDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  phone: string;

  @IsString()
  title: string;

  @IsString()
  level: string;
}
