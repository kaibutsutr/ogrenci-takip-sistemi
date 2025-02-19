"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_module_1 = require("./student/student.module");
const student_entity_1 = require("./student/student.entity");
const payment_module_1 = require("./payment/payment.module");
const payment_entity_1 = require("./payment/payment.entity");
const teacher_module_1 = require("./teacher/teacher.module");
const teacher_entity_1 = require("./teacher/teacher.entity");
const lecture_module_1 = require("./lecture/lecture.module");
const lecture_entity_1 = require("./lecture/lecture.entity");
const classlist_module_1 = require("./classlist/classlist.module");
const classlist_entity_1 = require("./classlist/classlist.entity");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                entities: [student_entity_1.Student, payment_entity_1.Payment, teacher_entity_1.Teacher, lecture_entity_1.Lecture, classlist_entity_1.Classlist, user_entity_1.User],
                synchronize: true,
            }),
            student_module_1.StudentModule,
            payment_module_1.PaymentModule,
            teacher_module_1.TeacherModule,
            lecture_module_1.LectureModule,
            classlist_module_1.ClasslistModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map