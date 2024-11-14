import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Payment } from '../payment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class UpdatePaymentDto {
  @Column()
  @IsOptional()
  amount: number;
  @Column()
  @IsOptional()
  receiver: string;
  @Column()
  @IsOptional()
  studentId: number;
}
