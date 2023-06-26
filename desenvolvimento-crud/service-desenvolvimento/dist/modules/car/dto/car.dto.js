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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarDTO = exports.CarInputDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CarInputDTO {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: 'John Doe',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CarInputDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        example: 123456,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CarInputDTO.prototype, "renavam", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: 'ABC1234',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CarInputDTO.prototype, "license", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: Number,
        example: 2000.5,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CarInputDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: 'YYYY',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CarInputDTO.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CarInputDTO.prototype, "idModel", void 0);
exports.CarInputDTO = CarInputDTO;
class CarDTO extends CarInputDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CarDTO.prototype, "id", void 0);
exports.CarDTO = CarDTO;
//# sourceMappingURL=car.dto.js.map