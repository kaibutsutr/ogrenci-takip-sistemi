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
  @Column()
  @IsNumber()
  amount: number;
  @Column()
  @IsString()
  receiver: string;
  @Column()
  @IsNumber()
  studentId: number;
}
