import { ClasslistService } from './classlist.service';
import { CreateClasslistDto } from './dtos/create-classlist.dto';
import { GetClasslistDto } from './dtos/get-classlist.dto';
import { UpdateClasslistDto } from './dtos/update-classlist.dto';
export declare class ClasslistController {
    private classlistService;
    constructor(classlistService: ClasslistService);
    createClasslist(body: CreateClasslistDto): Promise<import("./classlist.entity").Classlist>;
    findClasslist(id: number): Promise<import("./classlist.entity").Classlist>;
    find(query: GetClasslistDto): Promise<any[]>;
    findAll(): Promise<import("./classlist.entity").Classlist[]>;
    updateClasslist(body: UpdateClasslistDto, id: number): Promise<import("./classlist.entity").Classlist>;
    deleteUser(id: number): Promise<import("./classlist.entity").Classlist>;
}
