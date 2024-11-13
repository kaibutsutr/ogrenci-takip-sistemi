import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
import { GetStudentsDto } from './dtos/get-students.dto';
export declare class StudentService {
    private repo;
    constructor(repo: Repository<Student>);
    create(body: CreateStudentDto): Promise<Student>;
    findOne(id: number): Promise<Student>;
    find({ name, surname, guardian_name, guardian_surname, phone, guardian_phone, address, school, grade, lectures, }: GetStudentsDto): Promise<any[]>;
}
