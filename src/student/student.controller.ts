import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/create-student.dto';
import { query } from 'express';
import { GetStudentsDto } from './dtos/get-students.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {} //inject
  @Post('/signup')
  async createStudent(@Body() body: CreateStudentDto) {
    const student = await this.studentService.create(body);
    return student;
  }
  @Get('/:id')
  async findStudent(@Param('id') id: number) {
    const student = await this.studentService.findOne(id);
    if (!student) {
      throw new BadRequestException('Öğrenci Bulunamadı!');
    }
    return student;
  }
  @Get()
  async findByName(
    @Query('name') name: string,
    @Query('surname') surname: string,
  ) {
    const student = await this.studentService.find(name, surname);
    if (!student) {
      throw new BadRequestException('Öğrenci Bulunamadı!');
    }
    return student;
  }
}
