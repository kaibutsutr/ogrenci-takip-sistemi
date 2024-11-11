import {
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {} //inject
  @Post()
  createStudent() {
    this;
  }
}
