import { IsNumber, IsString } from 'class-validator';
import { Classlist } from '../classlist.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class CreateClasslistDto {
  @IsString()
  name: string;
}
