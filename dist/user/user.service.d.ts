import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    create(email: string, password: string, name: string, surname: string, phone: string): any;
    findOne(id: number): any;
    find(email: string): any;
    update(id: number, attrs: Partial<User>): Promise<any>;
    remove(id: number): Promise<any>;
}
