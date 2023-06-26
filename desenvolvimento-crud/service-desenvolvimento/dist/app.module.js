"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const brand_module_1 = require("./modules/brand/brand.module");
const typeorm_1 = require("@nestjs/typeorm");
const model_module_1 = require("./modules/modelo/model.module");
const car_module_1 = require("./modules/car/car.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            brand_module_1.BrandModule,
            model_module_1.ModelModule,
            car_module_1.CarModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '0.0.0.0',
                port: 3306,
                username: 'root',
                password: '123',
                database: 'desenvolvimentoDb',
                synchronize: false,
                autoLoadEntities: true,
                logging: false,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map