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
exports.Classlist = void 0;
const lecture_entity_1 = require("../lecture/lecture.entity");
const student_entity_1 = require("../student/student.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
let Classlist = class Classlist {
};
exports.Classlist = Classlist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Classlist.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)(),
    __metadata("design:type", String)
], Classlist.prototype, "name", void 0);
__decorate([
    (0, typeorm_4.ManyToOne)(() => lecture_entity_1.Lecture, (lecture) => lecture.classlists),
    (0, typeorm_4.JoinColumn)({ name: 'lectureId' }),
    __metadata("design:type", lecture_entity_1.Lecture)
], Classlist.prototype, "lecture", void 0);
__decorate([
    (0, typeorm_4.ManyToOne)(() => student_entity_1.Student, (student) => student.classlists),
    (0, typeorm_4.JoinColumn)({ name: 'studentId' }),
    __metadata("design:type", student_entity_1.Student)
], Classlist.prototype, "student", void 0);
exports.Classlist = Classlist = __decorate([
    (0, typeorm_3.Entity)()
], Classlist);
//# sourceMappingURL=classlist.entity.js.map