"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Trabalho 6 - Desenvolvimento')
        .setDescription('Implementar CRUD Carro, CRUD Modelo, CRUD Marca para o trabalho 6 da matéria de Banco de Dados.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cors());
    await app.listen(5001, () => {
        common_1.Logger.log(`Server running at http://localhost:5001`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map