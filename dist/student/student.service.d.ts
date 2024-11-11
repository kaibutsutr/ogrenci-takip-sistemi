import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
export declare class StudentService {
    private repo;
    constructor(repo: Repository<Student>);
    create(body: CreateStudentDto): Student;
}
