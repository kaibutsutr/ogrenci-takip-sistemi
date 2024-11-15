import { IsNumber, IsString } from 'class-validator';
import { Lecture } from '../lecture.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class GetLectureDto {
  @IsString()
  name: string;
  @IsNumber()
  capacity: number;
  @IsString()
  hours: string;

  @IsString()
  lectures: string;
  @IsString()
  title: string;
  @IsString()
  level: string;
}
