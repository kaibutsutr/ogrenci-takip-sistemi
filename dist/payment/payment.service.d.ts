import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { GetPaymentDto } from './dtos/get-payment.dto';
export declare class PaymentService {
    private repo;
    constructor(repo: Repository<Payment>);
    create(body: CreatePaymentDto): any;
    findOne(id: number): any;
    findAll(): any;
    find({ amount, receiver, studentId }: GetPaymentDto): any;
    update(id: number, attrs: Partial<Payment>): Promise<any>;
    remove(id: number): Promise<any>;
}
