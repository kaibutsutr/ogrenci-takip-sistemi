import { Injectable } from '@nestjs/common';
import { Lecture } from './lecture.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { GetLectureDto } from './dtos/get-lecture.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateLectureDto } from './dtos/update-lecture.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class LectureService {
  constructor(@InjectRepository(Lecture) private repo: Repository<Lecture>) {}
  create(body: CreateLectureDto) {
    const lecture = this.repo.create(body);

    console.log('Lecture created');

    return this.repo.save(lecture);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  // find all
  findAll() {
    return this.repo.find(); // bring all
  }

  // default find query
  find({ name, capacity, hours, lectures, title, level }: GetLectureDto) {
    // name search
    if (name) {
      return this.repo
        .createQueryBuilder()
        .where('name = :name', { name })
        .getRawMany();
    }

    if (capacity) {
      return this.repo
        .createQueryBuilder()
        .where('capacity = :capacity', { capacity })
        .getRawMany();
    }
    // hours
    if (hours) {
      return this.repo
        .createQueryBuilder()
        .where('hours = :hours', { hours })
        .getRawMany();
    }
    // lectures
    if (lectures) {
      return this.repo
        .createQueryBuilder()
        .where('lectures = :lectures', { lectures })
        .getRawMany();
    }
    //title
    if (title) {
      return this.repo
        .createQueryBuilder()
        .where('title = :title', { title })
        .getRawMany();
    }
    //level
    if (level) {
      return this.repo
        .createQueryBuilder()
        .where('level = :level', { level })
        .getRawMany();
    }
  }

  async update(id: number, attrs: Partial<Lecture>) {
    // attrs has the at least one piece of User data, like email or password
    // if we dont do it this way, we wont be able to update if user just wants to update one property
    const lecture = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!lecture) {
      throw new NotFoundException('Lecture not found!!!');
    }
    Object.assign(lecture, attrs); // assign the values in attrs to user object
    console.log('Lecture updated');

    return this.repo.save(lecture); // we save here to activate hooks
  }
  // delete lecture

  async remove(id: number) {
    const lecture = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!lecture) {
      throw new NotFoundException('Lecture not found!!!'); // instead of error we throw fitting exception
    }
    console.log('Lecture deleted');

    return this.repo.remove(lecture);
  }
}
