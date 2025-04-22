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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const teacher_entity_1 = require("./teacher.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let TeacherService = class TeacherService {
    constructor(repo) {
        this.repo = repo;
    }
    create(body) {
        const teacher = this.repo.create(body);
        console.log('Teacher created');
        return this.repo.save(teacher);
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    findAll() {
        return this.repo.find();
    }
    find({ name, surname, phone, lectures, title, level }) {
        if (name || surname) {
            if (name && surname) {
                return this.repo
                    .createQueryBuilder()
                    .where('name = :name', { name })
                    .andWhere('surname = :surname', { surname })
                    .getRawMany();
            }
            if (name) {
                return this.repo
                    .createQueryBuilder()
                    .where('name = :name', { name })
                    .getRawMany();
            }
            if (surname) {
                return this.repo
                    .createQueryBuilder()
                    .where('surname = :surname', { surname })
                    .getRawMany();
            }
        }
        if (phone) {
            return this.repo
                .createQueryBuilder()
                .where('phone = :phone', { phone })
                .getRawMany();
        }
        if (lectures) {
            return this.repo
                .createQueryBuilder()
                .where('lectures = :lectures', { lectures })
                .getRawMany();
        }
        if (title) {
            return this.repo
                .createQueryBuilder()
                .where('title = :title', { title })
                .getRawMany();
        }
        if (level) {
            return this.repo
                .createQueryBuilder()
                .where('level = :level', { level })
                .getRawMany();
        }
    }
    async update(id, attrs) {
        const teacher = await this.repo.findOneBy({ id });
        if (!teacher) {
            throw new common_2.NotFoundException('Teacher not found!!!');
        }
        Object.assign(teacher, attrs);
        console.log('Teacher updated');
        return this.repo.save(teacher);
    }
    async remove(id) {
        const teacher = await this.repo.findOneBy({ id });
        if (!teacher) {
            throw new common_2.NotFoundException('Teacher not found!!!');
        }
        console.log('Teacher deleted');
        return this.repo.remove(teacher);
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map