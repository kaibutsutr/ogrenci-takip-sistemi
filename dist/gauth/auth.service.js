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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unique_username_generator_1 = require("unique-username-generator");
const guser_entity_1 = require("./guser.entity");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    generateJwt(payload) {
        return this.jwtService.sign(payload);
    }
    async signIn(user) {
        if (!user) {
            throw new common_1.BadRequestException('Unauthenticated');
        }
        const userExists = await this.findUserByEmail(user.email);
        if (!userExists) {
            return this.registerUser(user);
        }
        return this.generateJwt({
            sub: userExists.id,
            email: userExists.email,
        });
    }
    async registerUser(user) {
        try {
            const newGoogleUser = this.userRepository.create(user);
            newGoogleUser.name = (0, unique_username_generator_1.generateFromEmail)(user.email, 5);
            await this.userRepository.save(newGoogleUser);
            return this.generateJwt({
                sub: newGoogleUser.id,
                email: newGoogleUser.email,
            });
        }
        catch {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findUserByEmail(email) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            return null;
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(guser_entity_1.GoogleUser)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map