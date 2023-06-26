import { ModelService } from './model.service';
import { ModelDTO, ModelInputDTO } from './dto/model.dto';
export declare class ModelController {
    private readonly modelService;
    private logger;
    constructor(modelService: ModelService);
    findAll(): Promise<ModelDTO[]>;
    findOne(id: number): Promise<ModelDTO>;
    create(data: ModelInputDTO): Promise<ModelDTO>;
    update(id: number, data: ModelInputDTO): Promise<ModelDTO>;
    delete(id: number): Promise<ModelDTO>;
}
