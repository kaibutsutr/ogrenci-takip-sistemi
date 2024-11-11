import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/create-student.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createStudent(body: CreateStudentDto): Promise<import("./student.entity").Student>;
    findStudent(id: number): Promise<import("./student.entity").Student>;
}
