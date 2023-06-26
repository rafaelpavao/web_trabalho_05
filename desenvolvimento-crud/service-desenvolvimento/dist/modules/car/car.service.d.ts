import { Car } from 'src/entities/car.entity';
import { Repository } from 'typeorm';
import { CarDTO, CarInputDTO } from './dto/car.dto';
export declare class CarService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    findAll(): Promise<CarDTO[]>;
    findOne(id: number): Promise<CarDTO>;
    create(data: CarInputDTO): Promise<CarDTO>;
    update(id: number, data: CarInputDTO): Promise<CarDTO>;
    delete(id: number): Promise<CarDTO>;
}
