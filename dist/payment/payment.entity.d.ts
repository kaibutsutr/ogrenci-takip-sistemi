import { Student } from 'src/student/student.entity';
export declare class Payment {
    id: number;
    name: string;
    surname: string;
    phone: string;
    guardian_name: string;
    guardian_surname: string;
    guardian_phone: string;
    address: string;
    school: string;
    grade: number;
    lectures: string;
    info: string;
    registration_date: Date;
    student: Student;
}