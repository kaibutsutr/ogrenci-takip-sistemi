"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasslistModule = void 0;
const common_1 = require("@nestjs/common");
const classlist_controller_1 = require("./classlist.controller");
const classlist_service_1 = require("./classlist.service");
const classlist_entity_1 = require("./classlist.entity");
let ClasslistModule = class ClasslistModule {
};
exports.ClasslistModule = ClasslistModule;
exports.ClasslistModule = ClasslistModule = __decorate([
    (0, common_1.Module)({
        imports: [TypeOrmModule.forFeature([classlist_entity_1.Classlist])],
        controllers: [classlist_controller_1.ClasslistController],
        providers: [classlist_service_1.ClasslistService],
    })
], ClasslistModule);
//# sourceMappingURL=classlist.module.js.map