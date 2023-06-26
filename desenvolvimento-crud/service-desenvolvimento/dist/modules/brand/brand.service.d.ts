import { Brand } from 'src/entities/brand.entity';
import { Repository } from 'typeorm';
import { BrandDTO, BrandInputDTO } from './dto/brand.dto';
export declare class BrandService {
    private brandRepository;
    constructor(brandRepository: Repository<Brand>);
    findAll(): Promise<BrandDTO[]>;
    findOne(id: number): Promise<BrandDTO>;
    create(data: BrandInputDTO): Promise<BrandDTO>;
    update(id: number, data: BrandInputDTO): Promise<BrandDTO>;
    delete(id: number): Promise<BrandDTO>;
}
