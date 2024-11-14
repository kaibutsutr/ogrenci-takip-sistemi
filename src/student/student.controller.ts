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
  //queries
  //find by queries entered
  @Get()
  async find(@Query() query: GetStudentsDto) {
    const student = await this.studentService.find(query);
    if (!student) {
      throw new BadRequestException('Öğrenci Bulunamadı!');
    }
    return student;
  }
  // get all
  @Get('/')
  findAll() {
    return this.studentService.findAll();
  }

  //patch

  //delete
}
