import { Model } from 'src/entities/model.entity';
import { Repository } from 'typeorm';
import { ModelDTO, ModelInputDTO } from './dto/model.dto';
export declare class ModelService {
    private modelRepository;
    constructor(modelRepository: Repository<Model>);
    findAll(): Promise<ModelDTO[]>;
    findOne(id: number): Promise<ModelDTO>;
    create(data: ModelInputDTO): Promise<ModelDTO>;
    update(id: number, data: ModelInputDTO): Promise<ModelDTO>;
    delete(id: number): Promise<ModelDTO>;
}
