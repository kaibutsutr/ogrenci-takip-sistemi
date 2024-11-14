import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { GetPaymentDto } from './dtos/get-payment.dto';
export declare class PaymentService {
    private repo;
    constructor(repo: Repository<Payment>);
    create(body: CreatePaymentDto): Promise<Payment>;
    findOne(id: number): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    find({ amount, receiver, studentId }: GetPaymentDto): Promise<any[]>;
    update(id: number, attrs: Partial<Payment>): Promise<Payment>;
    remove(id: number): Promise<Payment>;
}
