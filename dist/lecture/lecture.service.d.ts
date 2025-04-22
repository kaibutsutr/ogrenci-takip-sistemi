import { Lecture } from './lecture.entity';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { GetLectureDto } from './dtos/get-lecture.dto';
export declare class LectureService {
    private repo;
    constructor(repo: Repository<Lecture>);
    create(body: CreateLectureDto): any;
    findOne(id: number): any;
    findAll(): any;
    find({ name, capacity, hours, lectures, title, level }: GetLectureDto): any;
    update(id: number, attrs: Partial<Lecture>): Promise<any>;
    remove(id: number): Promise<any>;
}
