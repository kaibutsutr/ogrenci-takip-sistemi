import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn
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