import { AppModule } from 'src/app.module';
import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // create repo for student entity
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
