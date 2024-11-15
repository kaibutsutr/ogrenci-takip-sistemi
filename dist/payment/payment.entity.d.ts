import { Student } from 'src/student/student.entity';
export declare class Payment {
    id: number;
    name: string;
    amount: number;
    payment_date: Date;
    receiver: string;
    student: Student;
    studentId: number;
}
