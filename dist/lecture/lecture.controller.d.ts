import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { GetLectureDto } from './dtos/get-lecture.dto';
import { UpdateLectureDto } from './dtos/update-lecture.dto';
export declare class LectureController {
    private lectureService;
    constructor(lectureService: LectureService);
    createLecture(body: CreateLectureDto): Promise<import("./lecture.entity").Lecture>;
    findLecture(id: number): Promise<import("./lecture.entity").Lecture>;
    find(query: GetLectureDto): Promise<any[]>;
    findAll(): Promise<import("./lecture.entity").Lecture[]>;
    updateLecture(body: UpdateLectureDto, id: number): Promise<import("./lecture.entity").Lecture>;
    deleteUser(id: number): Promise<import("./lecture.entity").Lecture>;
}
