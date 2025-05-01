import { Payment } from 'src/payment/payment.entity';
import { Classlist } from 'src/classlist/classlist.entity';
export declare class Student {
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
    payments: Payment[];
    classlists: Classlist[];
}
