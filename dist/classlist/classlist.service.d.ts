import { Classlist } from './classlist.entity';
import { Repository } from 'typeorm';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { GetClasslistDto } from './dtos/get-classlist.dto';
export declare class ClasslistService {
    private repo;
    constructor(repo: Repository<Classlist>);
    create(body: CreateClasslistDto): any;
    findOne(id: number): any;
    findAll(): any;
    find({ name }: GetClasslistDto): any;
    update(id: number, attrs: Partial<Classlist>): Promise<any>;
    remove(id: number): Promise<any>;
}
