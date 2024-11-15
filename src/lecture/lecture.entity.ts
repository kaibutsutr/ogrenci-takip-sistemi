import { Classlist } from 'src/classlist/classlist.entity';
import { Teacher } from 'src/teacher/teacher.entity';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';
import { ManyToOne, JoinColumn, OneToMany } from 'typeorm';

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

  // many to one with teachers
  @ManyToOne(() => Teacher, (teacher) => teacher.lectures)
  @JoinColumn({ name: 'teacherId' }) // add a FK
  teacher: Teacher;

  // one to many with classids
  @OneToMany(() => Classlist, (classlist) => classlist.lecture)
  classlists: Classlist[];
}
