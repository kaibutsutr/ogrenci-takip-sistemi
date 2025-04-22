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
exports.ClasslistService = void 0;
const common_1 = require("@nestjs/common");
const classlist_entity_1 = require("./classlist.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let ClasslistService = class ClasslistService {
    constructor(repo) {
        this.repo = repo;
    }
    create(body) {
        const classlist = this.repo.create(body);
        console.log('Classlist created');
        return this.repo.save(classlist);
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    findAll() {
        return this.repo.find();
    }
    find({ name }) {
        if (name) {
            return this.repo
                .createQueryBuilder()
                .where('name = :name', { name })
                .getRawMany();
        }
    }
    async update(id, attrs) {
        const classlist = await this.repo.findOneBy({ id });
        if (!classlist) {
            throw new common_2.NotFoundException('Classlist not found!!!');
        }
        Object.assign(classlist, attrs);
        console.log('Classlist updated');
        return this.repo.save(classlist);
    }
    async remove(id) {
        const classlist = await this.repo.findOneBy({ id });
        if (!classlist) {
            throw new common_2.NotFoundException('Classlist not found!!!');
        }
        console.log('Classlist deleted');
        return this.repo.remove(classlist);
    }
};
exports.ClasslistService = ClasslistService;
exports.ClasslistService = ClasslistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(classlist_entity_1.Classlist)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], ClasslistService);
//# sourceMappingURL=classlist.service.js.map