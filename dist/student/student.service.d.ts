import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
export declare class StudentService {
    private repo;
    constructor(repo: Repository<Student>);
    create(body: CreateStudentDto): Promise<Student>;
    findOne(id: number): Promise<Student>;
    find(name: string, surname: string): Promise<Student[]>;
}
