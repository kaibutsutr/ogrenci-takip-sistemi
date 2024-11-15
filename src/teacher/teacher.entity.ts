import { Lecture } from 'src/lecture/lecture.entity';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';
import { OneToMany } from 'typeorm';

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
  title: string;
  @Column()
  level: string;
  //link to lectures
  @OneToMany(() => Lecture, (lecture) => lecture.teacher)
  lectures: Lecture[];
}
