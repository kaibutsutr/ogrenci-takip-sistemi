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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const payment_entity_1 = require("./payment.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
let PaymentService = class PaymentService {
    constructor(repo) {
        this.repo = repo;
    }
    create(body) {
        const payment = this.repo.create(body);
        console.log('Payment created');
        return this.repo.save(payment);
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    findAll() {
        return this.repo.find();
    }
    find({ amount, receiver, studentId }) {
        if (studentId) {
            return this.repo
                .createQueryBuilder()
                .where('studentId = :studentId', { studentId })
                .getRawMany();
        }
        if (amount) {
            return this.repo
                .createQueryBuilder()
                .where('amount = :amount', { amount })
                .getRawMany();
        }
        if (receiver) {
            return this.repo
                .createQueryBuilder()
                .where('receiver = :receiver', { receiver })
                .getRawMany();
        }
    }
    async update(id, attrs) {
        const payment = await this.repo.findOneBy({ id });
        if (!payment) {
            throw new common_2.NotFoundException('Payment not found!!!');
        }
        Object.assign(payment, attrs);
        console.log('Payment updated');
        return this.repo.save(payment);
    }
    async remove(id) {
        const payment = await this.repo.findOneBy({ id });
        if (!payment) {
            throw new common_2.NotFoundException('Payment not found!!!');
        }
        console.log('Payment deleted');
        return this.repo.remove(payment);
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map