import { Brand } from './brand.entity';
import { Car } from './car.entity';
export declare class Model {
    id: number;
    idBrand: number;
    name: string;
    brand: Brand;
    cars: Car[];
}
