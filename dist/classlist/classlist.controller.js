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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasslistController = void 0;
const common_1 = require("@nestjs/common");
const classlist_service_1 = require("./classlist.service");
const create_classlist_dto_1 = require("./dtos/create-classlist.dto");
const get_classlist_dto_1 = require("./dtos/get-classlist.dto");
const update_classlist_dto_1 = require("./dtos/update-classlist.dto");
let ClasslistController = class ClasslistController {
    constructor(classlistService) {
        this.classlistService = classlistService;
    }
    async createClasslist(body) {
        const classlist = await this.classlistService.create(body);
        return classlist;
    }
    async findClasslist(id) {
        const classlist = await this.classlistService.findOne(id);
        if (!classlist) {
            throw new common_1.BadRequestException('Ödeme Bulunamadı!');
        }
        return classlist;
    }
    async find(query) {
        const classlist = await this.classlistService.find(query);
        return classlist;
    }
    async findAll() {
        return await this.classlistService.findAll();
    }
    updateClasslist(body, id) {
        return this.classlistService.update(id, body);
    }
    deleteUser(id) {
        return this.classlistService.remove(id);
    }
};
exports.ClasslistController = ClasslistController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_classlist_dto_1.CreateClasslistDto !== "undefined" && create_classlist_dto_1.CreateClasslistDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ClasslistController.prototype, "createClasslist", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClasslistController.prototype, "findClasslist", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_classlist_dto_1.GetClasslistDto !== "undefined" && get_classlist_dto_1.GetClasslistDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ClasslistController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClasslistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_classlist_dto_1.UpdateClasslistDto !== "undefined" && update_classlist_dto_1.UpdateClasslistDto) === "function" ? _c : Object, Number]),
    __metadata("design:returntype", void 0)
], ClasslistController.prototype, "updateClasslist", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClasslistController.prototype, "deleteUser", null);
exports.ClasslistController = ClasslistController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('classlist'),
    __metadata("design:paramtypes", [classlist_service_1.ClasslistService])
], ClasslistController);
//# sourceMappingURL=classlist.controller.js.map