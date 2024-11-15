import { Teacher } from 'src/teacher/teacher.entity';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Classlist {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  //   // many to one with teachers
  //   @ManyToOne(() => Teacher, (teacher) => teacher.lectures)
  //   @JoinColumn({ name: 'teacherId' }) // add a FK
  //   teacher: Teacher;
  //   @Column()
  //   teacherId: number;
}
