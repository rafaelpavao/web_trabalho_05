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
var ModelController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelController = void 0;
const common_1 = require("@nestjs/common");
const model_service_1 = require("./model.service");
const swagger_1 = require("@nestjs/swagger");
const model_dto_1 = require("./dto/model.dto");
let ModelController = ModelController_1 = class ModelController {
    constructor(modelService) {
        this.modelService = modelService;
        this.logger = new common_1.Logger(ModelController_1.name);
    }
    async findAll() {
        this.logger.log(`[HTTP] GET /model - findAll()`);
        try {
            return await this.modelService.findAll();
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async findOne(id) {
        this.logger.log(`[HTTP] GET /model/${id} - findOne(${id})`);
        try {
            return await this.modelService.findOne(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async create(data) {
        this.logger.log(`[HTTP] POST /model - create(${JSON.stringify(data)})`);
        try {
            return await this.modelService.create(data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        this.logger.log(`[HTTP] PATCH /model/${id} - update(${id}, ${JSON.stringify(data)})`);
        try {
            return await this.modelService.update(id, data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        this.logger.log(`[HTTP] DELETE /model/${id} - delete(${id})`);
        try {
            return await this.modelService.delete(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all models' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get model by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create model' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_dto_1.ModelInputDTO]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update model' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, model_dto_1.ModelInputDTO]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete model' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "delete", null);
ModelController = ModelController_1 = __decorate([
    (0, common_1.Controller)('model'),
    (0, swagger_1.ApiTags)('model'),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelController);
exports.ModelController = ModelController;
//# sourceMappingURL=model.controller.js.map