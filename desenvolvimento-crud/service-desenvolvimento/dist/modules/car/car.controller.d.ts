import { CarService } from './car.service';
import { CarDTO, CarInputDTO } from './dto/car.dto';
export declare class CarController {
    private readonly carService;
    private logger;
    constructor(carService: CarService);
    findAll(): Promise<CarDTO[]>;
    findOne(id: number): Promise<CarDTO>;
    create(data: CarInputDTO): Promise<CarDTO>;
    update(id: number, data: CarInputDTO): Promise<CarDTO>;
    delete(id: number): Promise<CarDTO>;
}
