import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { GetPaymentDto } from './dtos/get-payment.dto';
import { UpdatePaymentDto } from './dtos/update-payment.dto';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPayment(body: CreatePaymentDto): Promise<any>;
    findPayment(id: number): Promise<any>;
    find(query: GetPaymentDto): Promise<any>;
    findAll(): Promise<any>;
    updatePayment(body: UpdatePaymentDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
