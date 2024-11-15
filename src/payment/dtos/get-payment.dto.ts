import { IsNumber, IsString } from 'class-validator';
import { Payment } from '../payment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from 'src/student/student.entity';

export class GetPaymentDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsString()
  receiver: string;

  @IsNumber()
  studentId: number;
}
