import { TypeOrmModule } from '@nestjs/typeorm'; // we need typeorm for db connection
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/payment.entity';
import { TeacherModule } from './teacher/teacher.module';
import { Teacher } from './teacher/teacher.entity';
import { LectureModule } from './lecture/lecture.module';
import { Lecture } from './lecture/lecture.entity';
import { ClasslistModule } from './classlist/classlist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //config for typeorm
      type: 'sqlite', //db type
      database: 'db.sqlite', //db name
      entities: [Student, Payment, Teacher, Lecture], //entities connected
      synchronize: true, // auto migration, this is for development only. You dont want to do migrations after app is developed!!!
    }),
    StudentModule,
    PaymentModule,
    TeacherModule,
    LectureModule,
    ClasslistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
