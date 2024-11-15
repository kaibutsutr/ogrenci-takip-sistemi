import { Module } from '@nestjs/common';
import { ClasslistController } from './classlist.controller';
import { ClasslistService } from './classlist.service';
import { Classlist } from './classlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classlist])], // create repo for classlist entity
  controllers: [ClasslistController],
  providers: [ClasslistService],
})
export class ClasslistModule {}
