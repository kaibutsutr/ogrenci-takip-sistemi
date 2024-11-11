import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity
export class Student {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  phone: number;
  @Column()
  guardian_name: string;
  @Column()
  guardian_surname: string;
  @Column()
  guardian_phone: number;
  @Column()
  address: string;
  @Column()
  school: string;
  @Column()
  grade: number;
  Column();
  lectures: string;
  Column();
  info: string;
  @CreateDateColumn()
  registration_date: Date;
}
