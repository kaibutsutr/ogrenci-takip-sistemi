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
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  amount: number;

  @IsOptional()
  receiver: string;

  @IsOptional()
  studentId: number;
}
