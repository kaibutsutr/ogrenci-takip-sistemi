"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectureController = void 0;
const common_1 = require("@nestjs/common");
const lecture_service_1 = require("./lecture.service");
const create_lecture_dto_1 = require("./dtos/create-lecture.dto");
const get_lecture_dto_1 = require("./dtos/get-lecture.dto");
const update_lecture_dto_1 = require("./dtos/update-lecture.dto");
const auth_guard_1 = require("../guards/auth.guard");
let LectureController = class LectureController {
    constructor(lectureService) {
        this.lectureService = lectureService;
    }
    async createLecture(body) {
        const lecture = await this.lectureService.create(body);
        return lecture;
    }
    async findLecture(id) {
        const lecture = await this.lectureService.findOne(id);
        if (!lecture) {
            throw new common_1.BadRequestException('Ödeme Bulunamadı!');
        }
        return lecture;
    }
    async find(query) {
        const lecture = await this.lectureService.find(query);
        return lecture;
    }
    async findAll() {
        return await this.lectureService.findAll();
    }
    updateLecture(body, id) {
        return this.lectureService.update(id, body);
    }
    deleteUser(id) {
        return this.lectureService.remove(id);
    }
};
exports.LectureController = LectureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lecture_dto_1.CreateLectureDto]),
    __metadata("design:returntype", Promise)
], LectureController.prototype, "createLecture", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LectureController.prototype, "findLecture", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_lecture_dto_1.GetLectureDto]),
    __metadata("design:returntype", Promise)
], LectureController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LectureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_lecture_dto_1.UpdateLectureDto, Number]),
    __metadata("design:returntype", void 0)
], LectureController.prototype, "updateLecture", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LectureController.prototype, "deleteUser", null);
exports.LectureController = LectureController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('lecture'),
    __metadata("design:paramtypes", [lecture_service_1.LectureService])
], LectureController);
//# sourceMappingURL=lecture.controller.js.map