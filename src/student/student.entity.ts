import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from 'src/payment/payment.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn() // auto create
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  phone: string;
  @Column()
  guardian_name: string;
  @Column()
  guardian_surname: string;
  @Column()
  guardian_phone: string;
  @Column()
  address: string;
  @Column()
  school: string;
  @Column()
  grade: number;
  @Column()
  lectures: string;
  @Column()
  info: string;
  @CreateDateColumn()
  public registration_date: Date;
  //payments
  @OneToMany(() => Payment, (payment) => payment.student)
  payments: Payment[];
}
