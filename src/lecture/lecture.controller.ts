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
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { query } from 'express';
import { GetLectureDto } from './dtos/get-lecture.dto';
import { UpdateLectureDto } from './dtos/update-lecture.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {} //inject
  @Post()
  async createLecture(@Body() body: CreateLectureDto) {
    const lecture = await this.lectureService.create(body);
    return lecture;
  }
  @Get('/:id')
  async findLecture(@Param('id') id: number) {
    const lecture = await this.lectureService.findOne(id);
    if (!lecture) {
      throw new BadRequestException('Ödeme Bulunamadı!');
    }
    return lecture;
  }
  //queries
  //find by queries entered
  @Get()
  async find(@Query() query: GetLectureDto) {
    const lecture = await this.lectureService.find(query);

    return lecture;
  }
  // get all
  @Get('/all')
  async findAll() {
    return await this.lectureService.findAll();
  }

  //patch
  @Patch('/:id')
  updateLecture(@Body() body: UpdateLectureDto, @Param('id') id: number) {
    // we use updateuserdto here to make filling data optional. User doesnt have to fill every part of data
    return this.lectureService.update(id, body);
  }

  //delete
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.lectureService.remove(id);
  }
}
