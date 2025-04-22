import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
import { GetStudentsDto } from './dtos/get-students.dto';
export declare class StudentService {
    private repo;
    constructor(repo: Repository<Student>);
    create(body: CreateStudentDto): any;
    findOne(id: number): any;
    findAll(): any;
    find({ name, surname, guardian_name, guardian_surname, phone, guardian_phone, address, school, grade, lectures, }: GetStudentsDto): any;
    update(id: number, attrs: Partial<Student>): Promise<any>;
    remove(id: number): Promise<any>;
}
