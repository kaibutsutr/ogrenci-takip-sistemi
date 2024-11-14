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
  // many to one
  @ManyToOne(() => Student, (student) => student.payments) // Define ManyToOne relation
  @JoinColumn({ name: 'StudentId' }) // Optional: Define the column name for the foreign key
  student: Student;
}
