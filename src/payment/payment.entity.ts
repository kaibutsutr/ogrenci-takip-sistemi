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
  amount: number;
  @CreateDateColumn()
  public payment_date: Date;
  @Column()
  receiver: string;

  // many to one
  //   @ManyToOne(() => Student, (student) => student.payment) // Define ManyToOne relation
  //   //   @JoinColumn({ name: 'StudentId' }) // Optional: Define the column name for the foreign key
  //   student: Student;
}
