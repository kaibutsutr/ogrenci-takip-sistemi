import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
import { GetStudentsDto } from './dtos/get-students.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  create(body: CreateStudentDto) {
    const student = this.repo.create(body);

    console.log('Student created');

    return this.repo.save(student);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  // default find query
  find({
    name,
    surname,
    guardian_name,
    guardian_surname,
    phone,
    guardian_phone,
    address,
    school,
    grade,
    lectures,
    registration_date,
  }: GetStudentsDto) {
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
    if (guardian_name || guardian_surname) {
      if (name && surname) {
        return this.repo
          .createQueryBuilder()
          .where('guardian_name = :guardian_name', { guardian_name })
          .andWhere('guardian_surname = :guardian_surname', {
            guardian_surname,
          })
          .getRawMany();
      }
      if (guardian_name) {
        return this.repo
          .createQueryBuilder()
          .where('guardian_name = :guardian_name', { guardian_name })
          .getRawMany();
      }
      if (guardian_surname) {
        return this.repo
          .createQueryBuilder()
          .where('guardian_surname = :guardian_surname', { guardian_surname })
          .getRawMany();
      }
    }
    // phone search
    if (phone) {
      return this.repo
        .createQueryBuilder()
        .where('phone = :phone', { phone })
        .getRawMany();
    }
  }
}
