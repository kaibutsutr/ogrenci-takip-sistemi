import { Module } from '@nestjs/common';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';
import { Lecture } from './lecture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture])], // create repo for student entity
  controllers: [LectureController],
  providers: [LectureService],
})
export class LectureModule {}
