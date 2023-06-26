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
exports.Model = void 0;
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("./brand.entity");
const car_entity_1 = require("./car.entity");
let Model = class Model {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Model.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_brand' }),
    __metadata("design:type", Number)
], Model.prototype, "idBrand", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Model.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, (brand) => brand.models),
    (0, typeorm_1.JoinColumn)({ name: 'id_brand', referencedColumnName: 'id' }),
    __metadata("design:type", brand_entity_1.Brand)
], Model.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => car_entity_1.Car, (car) => car.model),
    __metadata("design:type", Array)
], Model.prototype, "cars", void 0);
Model = __decorate([
    (0, typeorm_1.Entity)()
], Model);
exports.Model = Model;
//# sourceMappingURL=model.entity.js.map