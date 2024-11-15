import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])], // create repo for student entity
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
