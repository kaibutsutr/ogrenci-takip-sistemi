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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const create_teacher_dto_1 = require("./dtos/create-teacher.dto");
const get_teacher_dto_1 = require("./dtos/get-teacher.dto");
const update_teacher_dto_1 = require("./dtos/update-teacher.dto");
const auth_guard_1 = require("../guards/auth.guard");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async createTeacher(body) {
        const teacher = await this.teacherService.create(body);
        return teacher;
    }
    async findTeacher(id) {
        const teacher = await this.teacherService.findOne(id);
        if (!teacher) {
            throw new common_1.BadRequestException('Öğrenci Bulunamadı!');
        }
        return teacher;
    }
    async find(query) {
        const teacher = await this.teacherService.find(query);
        if (!teacher) {
            throw new common_1.BadRequestException('Öğrenci Bulunamadı!');
        }
        return teacher;
    }
    async findAll() {
        return await this.teacherService.findAll();
    }
    updateTeacher(body, id) {
        return this.teacherService.update(id, body);
    }
    deleteUser(id) {
        return this.teacherService.remove(id);
    }
};
exports.TeacherController = TeacherController;
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findTeacher", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_teacher_dto_1.GetTeacherDto]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_teacher_dto_1.UpdateTeacherDto, Number]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "deleteUser", null);
exports.TeacherController = TeacherController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('teacher'),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map