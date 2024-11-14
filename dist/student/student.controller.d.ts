import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/create-student.dto';
import { GetStudentsDto } from './dtos/get-students.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createStudent(body: CreateStudentDto): Promise<import("./student.entity").Student>;
    findStudent(id: number): Promise<import("./student.entity").Student>;
    find(query: GetStudentsDto): Promise<any[]>;
    findAll(): Promise<import("./student.entity").Student[]>;
    updateStudent(body: CreateStudentDto, id: number): any;
}
