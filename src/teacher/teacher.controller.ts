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
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { query } from 'express';
import { GetTeacherDto } from './dtos/get-teacher.dto';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {} //inject
  @Post('/signup')
  async createTeacher(@Body() body: CreateTeacherDto) {
    const teacher = await this.teacherService.create(body);
    return teacher;
  }
  @Get('/:id')
  async findTeacher(@Param('id') id: number) {
    const teacher = await this.teacherService.findOne(id);
    if (!teacher) {
      throw new BadRequestException('Öğrenci Bulunamadı!');
    }
    return teacher;
  }
  //queries
  //find by queries entered
  @Get()
  async find(@Query() query: GetTeacherDto) {
    const teacher = await this.teacherService.find(query);
    if (!teacher) {
      throw new BadRequestException('Öğrenci Bulunamadı!');
    }
    return teacher;
  }
  // get all
  @Get('/all')
  async findAll() {
    return await this.teacherService.findAll();
  }

  //patch
  @Patch('/:id')
  updateTeacher(@Body() body: UpdateTeacherDto, @Param('id') id: number) {
    // we use updateuserdto here to make filling data optional. User doesnt have to fill every part of data
    return this.teacherService.update(id, body);
  }

  //delete
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.teacherService.remove(id);
  }
}
