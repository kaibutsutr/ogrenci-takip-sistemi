import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { GetLectureDto } from './dtos/get-lecture.dto';
import { UpdateLectureDto } from './dtos/update-lecture.dto';
export declare class LectureController {
    private lectureService;
    constructor(lectureService: LectureService);
    createLecture(body: CreateLectureDto): Promise<any>;
    findLecture(id: number): Promise<any>;
    find(query: GetLectureDto): Promise<any>;
    findAll(): Promise<any>;
    updateLecture(body: UpdateLectureDto, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
