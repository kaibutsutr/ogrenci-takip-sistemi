import { Classlist } from './classlist.entity';
import { Repository } from 'typeorm';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { GetClasslistDto } from './dtos/get-classlist.dto';
export declare class ClasslistService {
    private repo;
    constructor(repo: Repository<Classlist>);
    create(body: CreateClasslistDto): Promise<Classlist>;
    findOne(id: number): Promise<Classlist>;
    findAll(): Promise<Classlist[]>;
    find({ name }: GetClasslistDto): Promise<any[]>;
    update(id: number, attrs: Partial<Classlist>): Promise<Classlist>;
    remove(id: number): Promise<Classlist>;
}
