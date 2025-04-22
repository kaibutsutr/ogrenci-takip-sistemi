import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { GetTeacherDto } from './dtos/get-teacher.dto';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    createTeacher(body: CreateTeacherDto): Promise<any>;
    findTeacher(id: number): Promise<any>;
    find(query: GetTeacherDto): Promise<any>;
    findAll(): Promise<any>;
    updateTeacher(body: UpdateTeacherDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
