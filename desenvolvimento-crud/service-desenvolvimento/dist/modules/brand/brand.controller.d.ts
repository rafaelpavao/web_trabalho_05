import { BrandService } from './brand.service';
import { BrandDTO, BrandInputDTO } from './dto/brand.dto';
export declare class BrandController {
    private readonly brandService;
    private logger;
    constructor(brandService: BrandService);
    findAll(): Promise<BrandDTO[]>;
    findOne(id: number): Promise<BrandDTO>;
    create(data: BrandInputDTO): Promise<BrandDTO>;
    update(id: number, data: BrandInputDTO): Promise<BrandDTO>;
    delete(id: number): Promise<BrandDTO>;
}
