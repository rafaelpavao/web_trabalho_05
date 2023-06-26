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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_entity_1 = require("../../entities/brand.entity");
const typeorm_2 = require("typeorm");
let BrandService = class BrandService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    async findAll() {
        return await this.brandRepository.find();
    }
    async findOne(id) {
        const brand = await this.brandRepository.findOne({ where: { id } });
        if (!brand) {
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
        return brand;
    }
    async create(data) {
        const brand = this.brandRepository.create(data);
        return await this.brandRepository.save(brand);
    }
    async update(id, data) {
        await this.brandRepository.update(id, data);
        return await this.findOne(id);
    }
    async delete(id) {
        const brand = await this.findOne(id);
        await this.brandRepository.delete(id);
        return brand;
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map