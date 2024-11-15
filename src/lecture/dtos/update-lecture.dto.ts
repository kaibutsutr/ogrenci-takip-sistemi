import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Lecture } from '../lecture.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class UpdateLectureDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsNumber()
  capacity: number;
  @IsOptional()
  @IsString()
  hours: string;
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
