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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lecture = void 0;
const teacher_entity_1 = require("../teacher/teacher.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
let Lecture = class Lecture {
};
exports.Lecture = Lecture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lecture.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "name", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], Lecture.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "hours", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "lectures", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "title", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "level", void 0);
__decorate([
    (0, typeorm_4.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.lectures),
    (0, typeorm_4.JoinColumn)({ name: 'teacherId' }),
    __metadata("design:type", teacher_entity_1.Teacher)
], Lecture.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", Number)
], Lecture.prototype, "teacherId", void 0);
exports.Lecture = Lecture = __decorate([
    (0, typeorm_3.Entity)()
], Lecture);
//# sourceMappingURL=lecture.entity.js.map