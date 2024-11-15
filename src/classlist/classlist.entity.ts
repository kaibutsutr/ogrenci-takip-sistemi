import { Lecture } from 'src/lecture/lecture.entity';
import { Student } from 'src/student/student.entity';
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

  // many to one with lectures
  @ManyToOne(() => Lecture, (lecture) => lecture.classlists)
  @JoinColumn({ name: 'lectureId' }) // add a FK
  lecture: Lecture;

  // many to one with students
  @ManyToOne(() => Student, (student) => student.classlists)
  @JoinColumn({ name: 'studentId' }) // add a FK
  student: Student;
}
