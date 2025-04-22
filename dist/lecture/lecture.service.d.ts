import { Lecture } from './lecture.entity';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { GetLectureDto } from './dtos/get-lecture.dto';
export declare class LectureService {
    private repo;
    constructor(repo: Repository<Lecture>);
    create(body: CreateLectureDto): Promise<Lecture>;
    findOne(id: number): Promise<Lecture>;
    findAll(): Promise<Lecture[]>;
    find({ name, capacity, hours, lectures, title, level }: GetLectureDto): Promise<any[]>;
    update(id: number, attrs: Partial<Lecture>): Promise<Lecture>;
    remove(id: number): Promise<Lecture>;
}
