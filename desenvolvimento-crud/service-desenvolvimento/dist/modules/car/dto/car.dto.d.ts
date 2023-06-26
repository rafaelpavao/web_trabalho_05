export declare class CarInputDTO {
    name?: string;
    renavam?: number;
    license?: string;
    price?: number;
    year?: string;
    idModel: number;
}
export declare class CarDTO extends CarInputDTO {
    id: number;
}
