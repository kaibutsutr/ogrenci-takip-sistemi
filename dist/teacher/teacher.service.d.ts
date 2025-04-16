import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { GetTeacherDto } from './dtos/get-teacher.dto';
export declare class TeacherService {
    private repo;
    constructor(repo: Repository<Teacher>);
    create(body: CreateTeacherDto): Promise<Teacher>;
    findOne(id: number): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    find({ name, surname, phone, lectures, title, level }: GetTeacherDto): Promise<any[]>;
    update(id: number, attrs: Partial<Teacher>): Promise<Teacher>;
    remove(id: number): Promise<Teacher>;
}
