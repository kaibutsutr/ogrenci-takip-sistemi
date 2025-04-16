import { Lecture } from 'src/lecture/lecture.entity';
export declare class Teacher {
    id: number;
    name: string;
    surname: string;
    phone: string;
    title: string;
    level: string;
    lectures: Lecture[];
}
