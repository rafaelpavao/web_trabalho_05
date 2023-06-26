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
var BrandController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const swagger_1 = require("@nestjs/swagger");
const brand_dto_1 = require("./dto/brand.dto");
let BrandController = BrandController_1 = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
        this.logger = new common_1.Logger(BrandController_1.name);
    }
    async findAll() {
        this.logger.log(`[HTTP] GET /brand - findAll()`);
        try {
            return await this.brandService.findAll();
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async findOne(id) {
        this.logger.log(`[HTTP] GET /brand/${id} - findOne(${id})`);
        try {
            return await this.brandService.findOne(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async create(data) {
        this.logger.log(`[HTTP] POST /brand - create(${JSON.stringify(data)})`);
        try {
            return await this.brandService.create(data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        this.logger.log(`[HTTP] PATCH /brand/${id} - update(${id}, ${JSON.stringify(data)})`);
        try {
            return await this.brandService.update(id, data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        this.logger.log(`[HTTP] DELETE /brand/${id} - delete(${id})`);
        try {
            return await this.brandService.delete(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all brands' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get brand by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create brand' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.BrandInputDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update brand' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, brand_dto_1.BrandInputDTO]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete brand' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "delete", null);
BrandController = BrandController_1 = __decorate([
    (0, common_1.Controller)('brand'),
    (0, swagger_1.ApiTags)('brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map