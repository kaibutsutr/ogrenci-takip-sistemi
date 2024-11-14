import { AppModule } from 'src/app.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])], // create repo for student entity
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
