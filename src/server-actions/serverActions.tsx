"use server"

import {ICar} from "@/models/ICar";
import {carService} from "@/services/api.service";

export const saveCar = async (newCar: ICar) => {
    await carService.postCar(newCar);
}

export const getCars = async (): Promise<ICar[]> => {
    return await carService.getAllCars();
}