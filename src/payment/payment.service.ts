import { Injectable } from '@nestjs/common';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { GetPaymentDto } from './dtos/get-payment.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdatePaymentDto } from './dtos/update-payment.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) private repo: Repository<Payment>) {}
  create(body: CreatePaymentDto) {
    const payment = this.repo.create(body);

    console.log('Payment created');

    return this.repo.save(payment);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  // find all
  findAll() {
    return this.repo.find(); // bring all
  }

  // default find query
  find({ amount, receiver }: GetPaymentDto) {
    // grade search

    if (amount) {
      return this.repo
        .createQueryBuilder()
        .where('amount = :amount', { amount })
        .getRawMany();
    }
    // receiver
    if (receiver) {
      return this.repo
        .createQueryBuilder()
        .where('receiver = :receiver', { receiver })
        .getRawMany();
    }
  }
  async update(id: number, attrs: Partial<Payment>) {
    // attrs has the at least one piece of User data, like email or password
    // if we dont do it this way, we wont be able to update if user just wants to update one property
    const payment = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!payment) {
      throw new NotFoundException('Payment not found!!!');
    }
    Object.assign(payment, attrs); // assign the values in attrs to user object
    console.log('Payment updated');

    return this.repo.save(payment); // we save here to activate hooks
  }
  // delete payment

  async remove(id: number) {
    const payment = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!payment) {
      throw new NotFoundException('Payment not found!!!'); // instead of error we throw fitting exception
    }
    console.log('Payment deleted');

    return this.repo.remove(payment);
  }
}
