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
exports.LectureService = void 0;
const common_1 = require("@nestjs/common");
const lecture_entity_1 = require("./lecture.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let LectureService = class LectureService {
    constructor(repo) {
        this.repo = repo;
    }
    create(body) {
        const lecture = this.repo.create(body);
        console.log('Lecture created');
        return this.repo.save(lecture);
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    findAll() {
        return this.repo.find();
    }
    find({ name, capacity, hours, lectures, title, level }) {
        if (name) {
            return this.repo
                .createQueryBuilder()
                .where('name = :name', { name })
                .getRawMany();
        }
        if (capacity) {
            return this.repo
                .createQueryBuilder()
                .where('capacity = :capacity', { capacity })
                .getRawMany();
        }
        if (hours) {
            return this.repo
                .createQueryBuilder()
                .where('hours = :hours', { hours })
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
        const lecture = await this.repo.findOneBy({ id });
        if (!lecture) {
            throw new common_2.NotFoundException('Lecture not found!!!');
        }
        Object.assign(lecture, attrs);
        console.log('Lecture updated');
        return this.repo.save(lecture);
    }
    async remove(id) {
        const lecture = await this.repo.findOneBy({ id });
        if (!lecture) {
            throw new common_2.NotFoundException('Lecture not found!!!');
        }
        console.log('Lecture deleted');
        return this.repo.remove(lecture);
    }
};
exports.LectureService = LectureService;
exports.LectureService = LectureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(lecture_entity_1.Lecture)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], LectureService);
//# sourceMappingURL=lecture.service.js.map