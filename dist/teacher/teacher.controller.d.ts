import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { GetTeacherDto } from './dtos/get-teacher.dto';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    createTeacher(body: CreateTeacherDto): Promise<import("./teacher.entity").Teacher>;
    findTeacher(id: number): Promise<import("./teacher.entity").Teacher>;
    find(query: GetTeacherDto): Promise<any[]>;
    findAll(): Promise<import("./teacher.entity").Teacher[]>;
    updateTeacher(body: UpdateTeacherDto, id: number): Promise<import("./teacher.entity").Teacher>;
    deleteUser(id: number): Promise<import("./teacher.entity").Teacher>;
}
