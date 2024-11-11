import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  create(body: CreateStudentDto) {
    const student = this.repo.create(body);
    return student;
  }
}
