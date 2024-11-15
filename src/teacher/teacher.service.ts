import { Injectable } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { GetTeacherDto } from './dtos/get-teacher.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private repo: Repository<Teacher>) {}
  create(body: CreateTeacherDto) {
    const teacher = this.repo.create(body);

    console.log('Teacher created');

    return this.repo.save(teacher);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  // find all
  findAll() {
    return this.repo.find(); // bring all
  }

  // default find query
  find({ name, surname, phone, lectures, title, level }: GetTeacherDto) {
    // name and surname search
    if (name || surname) {
      if (name && surname) {
        return this.repo
          .createQueryBuilder()
          .where('name = :name', { name })
          .andWhere('surname = :surname', { surname })
          .getRawMany();
      }
      if (name) {
        return this.repo
          .createQueryBuilder()
          .where('name = :name', { name })
          .getRawMany();
      }
      if (surname) {
        return this.repo
          .createQueryBuilder()
          .where('surname = :surname', { surname })
          .getRawMany();
      }
    }
    // guardian search

    // phone search
    if (phone) {
      return this.repo
        .createQueryBuilder()
        .where('phone = :phone', { phone })
        .getRawMany();
    }

    // lectures search
    if (lectures) {
      return this.repo
        .createQueryBuilder()
        .where('lectures = :lectures', { lectures })
        .getRawMany();
    }
    // title search
    if (title) {
      return this.repo
        .createQueryBuilder()
        .where('title = :title', { title })
        .getRawMany();
    }
    // level search
    if (level) {
      return this.repo
        .createQueryBuilder()
        .where('level = :level', { level })
        .getRawMany();
    }

    //update teacher
  }
  async update(id: number, attrs: Partial<Teacher>) {
    // attrs has the at least one piece of User data, like email or password
    // if we dont do it this way, we wont be able to update if user just wants to update one property
    const teacher = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!teacher) {
      throw new NotFoundException('Teacher not found!!!');
    }
    Object.assign(teacher, attrs); // assign the values in attrs to user object
    console.log('Teacher updated');

    return this.repo.save(teacher); // we save here to activate hooks
  }
  // delete teacher

  async remove(id: number) {
    const teacher = await this.repo.findOneBy({ id }); //  find the user with given id then check if its not null
    if (!teacher) {
      throw new NotFoundException('Teacher not found!!!'); // instead of error we throw fitting exception
    }
    console.log('Teacher deleted');

    return this.repo.remove(teacher);
  }
}
