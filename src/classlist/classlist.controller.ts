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
import { ClasslistService } from './classlist.service';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { query } from 'express';
import { GetClasslistDto } from './dtos/get-classlist.dto';
import { UpdateClasslistDto } from './dtos/update-classlist.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('classlist')
export class ClasslistController {
  constructor(private classlistService: ClasslistService) {} //inject
  @Post()
  async createClasslist(@Body() body: CreateClasslistDto) {
    const classlist = await this.classlistService.create(body);
    return classlist;
  }
  @Get('/:id')
  async findClasslist(@Param('id') id: number) {
    const classlist = await this.classlistService.findOne(id);
    if (!classlist) {
      throw new BadRequestException('Ödeme Bulunamadı!');
    }
    return classlist;
  }
  //queries
  //find by queries entered
  @Get()
  async find(@Query() query: GetClasslistDto) {
    const classlist = await this.classlistService.find(query);

    return classlist;
  }
  // get all
  @Get('/all')
  async findAll() {
    return await this.classlistService.findAll();
  }

  //patch
  @Patch('/:id')
  updateClasslist(@Body() body: UpdateClasslistDto, @Param('id') id: number) {
    // we use updateuserdto here to make filling data optional. User doesnt have to fill every part of data
    return this.classlistService.update(id, body);
  }

  //delete
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.classlistService.remove(id);
  }
}
