import { StudentService } from './student.service';
import { CreateStudentDto } from './dtos/create-student.dto';
import { GetStudentsDto } from './dtos/get-students.dto';
import { updateStudentDto } from './dtos/update-student.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createStudent(body: CreateStudentDto): Promise<any>;
    findStudent(id: number): Promise<any>;
    find(query: GetStudentsDto): Promise<any>;
    findAll(): Promise<any>;
    updateStudent(body: updateStudentDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
