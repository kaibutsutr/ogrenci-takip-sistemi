import { Student } from 'src/student/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManyToOne } from 'typeorm';
import { JoinColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn() // auto create
  id: number;
  @Column()
  name: string;
  @Column()
  amount: number;
  @CreateDateColumn()
  public payment_date: Date;
  @Column()
  receiver: string;

  // many to one
  @ManyToOne(() => Student, (student) => student.payments)
  @JoinColumn({ name: 'studentId' }) // add a FK
  student: Student;
}
