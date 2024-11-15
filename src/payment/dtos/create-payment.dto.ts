import { IsNumber, IsString } from 'class-validator';
import { Payment } from '../payment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class CreatePaymentDto {
  @IsString()
  name: string;
  @IsNumber()
  amount: number;

  @IsString()
  receiver: string;
}
