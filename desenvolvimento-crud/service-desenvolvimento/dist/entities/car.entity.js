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
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = require("./model.entity");
let Car = class Car {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Car.prototype, "renavam", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 7 }),
    __metadata("design:type", String)
], Car.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Car.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('year'),
    __metadata("design:type", String)
], Car.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.Model, (model) => model.cars),
    (0, typeorm_1.JoinColumn)({ name: 'id_model', referencedColumnName: 'id' }),
    __metadata("design:type", model_entity_1.Model)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_model' }),
    __metadata("design:type", Number)
], Car.prototype, "idModel", void 0);
Car = __decorate([
    (0, typeorm_1.Entity)()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map