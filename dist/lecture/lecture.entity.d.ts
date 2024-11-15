import { Teacher } from 'src/teacher/teacher.entity';
export declare class Lecture {
    id: number;
    name: string;
    capacity: number;
    hours: string;
    teacher: Teacher;
    teacherId: number;
}
