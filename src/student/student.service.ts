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
  //name+surname
  findName(name: string, surname: string) {
    return this.repo.find({ where: { name, surname } });
  }
  // default find query
  find(name: string) {
    return this.repo.find({ where: { name } });
  }
}
