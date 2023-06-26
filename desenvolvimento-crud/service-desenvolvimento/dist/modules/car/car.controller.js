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
var CarController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const car_service_1 = require("./car.service");
const swagger_1 = require("@nestjs/swagger");
const car_dto_1 = require("./dto/car.dto");
let CarController = CarController_1 = class CarController {
    constructor(carService) {
        this.carService = carService;
        this.logger = new common_1.Logger(CarController_1.name);
    }
    async findAll() {
        this.logger.log(`[HTTP] GET /car - findAll()`);
        try {
            return await this.carService.findAll();
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async findOne(id) {
        this.logger.log(`[HTTP] GET /car/${id} - findOne(${id})`);
        try {
            return await this.carService.findOne(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async create(data) {
        this.logger.log(`[HTTP] POST /car - create(${JSON.stringify(data)})`);
        try {
            return await this.carService.create(data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        this.logger.log(`[HTTP] PATCH /car/${id} - update(${id}, ${JSON.stringify(data)})`);
        try {
            return await this.carService.update(id, data);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        this.logger.log(`[HTTP] DELETE /car/${id} - delete(${id})`);
        try {
            return await this.carService.delete(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cars' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get car by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create car' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarInputDTO]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update car' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, car_dto_1.CarInputDTO]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete car' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "delete", null);
CarController = CarController_1 = __decorate([
    (0, common_1.Controller)('car'),
    (0, swagger_1.ApiTags)('car'),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map