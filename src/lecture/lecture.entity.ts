import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  capacity: number;
  @Column()
  hours: string;
  @Column()
  lectures: string;
  @Column()
  title: string;
  @Column()
  level: string;
}
