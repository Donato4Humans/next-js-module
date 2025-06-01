"use server"

import {ICar} from "@/models/ICar";
import {carService} from "@/services/api.service";

export const saveCar = async (formData: FormData) => {

    let price: number = 0;
    let year: number = 0;
    let newCar: ICar = {brand: '', price: 0, year: 0};

    const brand = formData.get('brand')?.toString();
    const priceStr = formData.get('price')?.toString();
    const yearStr = formData.get('year')?.toString();

    if(priceStr && yearStr)
    {
        price = parseFloat(priceStr);
        year = parseInt(yearStr);
    }
    if(brand){
        newCar = {
            brand: brand,
            price: price,
            year: year
        }
    }

    console.log(newCar);

    await carService.postCar(newCar);
}

export const getCars = async (): Promise<ICar[]> => {
    return await carService.getAllCars();
}