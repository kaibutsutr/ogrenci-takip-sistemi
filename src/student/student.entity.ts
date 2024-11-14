import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Transform } from 'class-transformer';
@Entity()
export class Student {
  @PrimaryGeneratedColumn() // auto create
  id: number;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  name: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  surname: string;
  @Column()
  phone: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  guardian_name: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  guardian_surname: string;
  @Column()
  guardian_phone: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  address: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  school: string;
  @Column()
  grade: number;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  lectures: string;
  @Column()
  @Transform(({ value }) => value.toLowerCase())
  info: string;
  @CreateDateColumn()
  public registration_date: Date;
}
