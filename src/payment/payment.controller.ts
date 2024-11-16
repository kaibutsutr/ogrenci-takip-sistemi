import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
  SerializeOptions,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { query } from 'express';
import { GetPaymentDto } from './dtos/get-payment.dto';
import { UpdatePaymentDto } from './dtos/update-payment.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {} //inject
  @Post()
  async createPayment(@Body() body: CreatePaymentDto) {
    const payment = await this.paymentService.create(body);
    return payment;
  }
  @Get('/:id')
  async findPayment(@Param('id') id: number) {
    const payment = await this.paymentService.findOne(id);
    if (!payment) {
      throw new BadRequestException('Ödeme Bulunamadı!');
    }
    return payment;
  }
  //queries
  //find by queries entered
  @Get()
  async find(@Query() query: GetPaymentDto) {
    const payment = await this.paymentService.find(query);

    return payment;
  }
  // get all
  @Get('/all')
  async findAll() {
    return await this.paymentService.findAll();
  }

  //patch
  @Patch('/:id')
  updatePayment(@Body() body: UpdatePaymentDto, @Param('id') id: number) {
    // we use updateuserdto here to make filling data optional. User doesnt have to fill every part of data
    return this.paymentService.update(id, body);
  }

  //delete
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.paymentService.remove(id);
  }
}
