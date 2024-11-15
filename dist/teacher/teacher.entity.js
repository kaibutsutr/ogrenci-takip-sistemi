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
exports.Teacher = void 0;
const lecture_entity_1 = require("../lecture/lecture.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
let Teacher = class Teacher {
};
exports.Teacher = Teacher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "name", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "surname", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "phone", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "title", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "level", void 0);
__decorate([
    (0, typeorm_4.OneToMany)(() => lecture_entity_1.Lecture, (lecture) => lecture.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "lectures", void 0);
exports.Teacher = Teacher = __decorate([
    (0, typeorm_3.Entity)()
], Teacher);
//# sourceMappingURL=teacher.entity.js.map