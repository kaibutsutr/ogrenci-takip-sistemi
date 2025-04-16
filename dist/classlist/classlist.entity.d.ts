import { Lecture } from 'src/lecture/lecture.entity';
import { Student } from 'src/student/student.entity';
export declare class Classlist {
    id: number;
    name: string;
    lecture: Lecture;
    student: Student;
}
