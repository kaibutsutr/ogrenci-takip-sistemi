import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { GetPaymentDto } from './dtos/get-payment.dto';
import { UpdatePaymentDto } from './dtos/update-payment.dto';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPayment(body: CreatePaymentDto): Promise<import("./payment.entity").Payment>;
    findPayment(id: number): Promise<import("./payment.entity").Payment>;
    find(query: GetPaymentDto): Promise<any[]>;
    findAll(): Promise<import("./payment.entity").Payment[]>;
    updatePayment(body: UpdatePaymentDto, id: number): Promise<import("./payment.entity").Payment>;
    deleteUser(id: number): Promise<import("./payment.entity").Payment>;
}
