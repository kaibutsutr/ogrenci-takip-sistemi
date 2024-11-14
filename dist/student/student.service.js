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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("./student.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let StudentService = class StudentService {
    constructor(repo) {
        this.repo = repo;
    }
    create(body) {
        const student = this.repo.create(body);
        console.log('Student created');
        return this.repo.save(student);
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    find({ name, surname, guardian_name, guardian_surname, phone, guardian_phone, address, school, grade, lectures, }) {
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
        if (guardian_name || guardian_surname) {
            if (guardian_name && guardian_surname) {
                return this.repo
                    .createQueryBuilder()
                    .where('guardian_name = :guardian_name', { guardian_name })
                    .andWhere('guardian_surname = :guardian_surname', {
                    guardian_surname,
                })
                    .getRawMany();
            }
            if (guardian_name) {
                return this.repo
                    .createQueryBuilder()
                    .where('guardian_name = :guardian_name', { guardian_name })
                    .getRawMany();
            }
            if (guardian_surname) {
                return this.repo
                    .createQueryBuilder()
                    .where('guardian_surname = :guardian_surname', { guardian_surname })
                    .getRawMany();
            }
        }
        if (phone) {
            return this.repo
                .createQueryBuilder()
                .where('phone = :phone', { phone })
                .getRawMany();
        }
        if (guardian_phone) {
            return this.repo
                .createQueryBuilder()
                .where('guardian_phone = :guardian_phone', { guardian_phone })
                .getRawMany();
        }
        if (address) {
            return this.repo
                .createQueryBuilder()
                .where('address = :address', { address })
                .getRawMany();
        }
        if (school) {
            return this.repo
                .createQueryBuilder()
                .where('school = :school', { school })
                .getRawMany();
        }
        if (lectures) {
            return this.repo
                .createQueryBuilder()
                .where('lectures = :lectures', { lectures })
                .getRawMany();
        }
        if (grade) {
            return this.repo
                .createQueryBuilder()
                .where('grade = :grade', { grade })
                .getRawMany();
        }
    }
    findAll() {
        return this.repo.find();
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map