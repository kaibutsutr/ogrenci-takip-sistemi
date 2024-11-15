import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  phone: string;
  @Column()
  lectures: string;
  @Column()
  title: string;
  @Column()
  level: string;
}
