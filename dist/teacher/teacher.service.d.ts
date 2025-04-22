import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { GetTeacherDto } from './dtos/get-teacher.dto';
export declare class TeacherService {
    private repo;
    constructor(repo: Repository<Teacher>);
    create(body: CreateTeacherDto): any;
    findOne(id: number): any;
    findAll(): any;
    find({ name, surname, phone, lectures, title, level }: GetTeacherDto): any;
    update(id: number, attrs: Partial<Teacher>): Promise<any>;
    remove(id: number): Promise<any>;
}
