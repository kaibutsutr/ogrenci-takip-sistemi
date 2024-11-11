import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/create-student.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {} //inject
  @Post('/signup')
  async createStudent(@Body() body: CreateStudentDto) {
    const student = await this.studentService.create(body);
    return student;
  }
}
