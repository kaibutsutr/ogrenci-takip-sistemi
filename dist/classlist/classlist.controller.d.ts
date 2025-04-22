import { ClasslistService } from './classlist.service';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { GetClasslistDto } from './dtos/get-classlist.dto';
import { UpdateClasslistDto } from './dtos/update-classlist.dto';
export declare class ClasslistController {
    private classlistService;
    constructor(classlistService: ClasslistService);
    createClasslist(body: CreateClasslistDto): Promise<any>;
    findClasslist(id: number): Promise<any>;
    find(query: GetClasslistDto): Promise<any>;
    findAll(): Promise<any>;
    updateClasslist(body: UpdateClasslistDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
