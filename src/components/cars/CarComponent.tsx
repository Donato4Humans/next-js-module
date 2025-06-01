import React, {FC} from 'react';
import {ICar} from "@/models/ICar";

type CarPropsType = {
    item: ICar
}

const CarComponent: FC<CarPropsType> = ({item:{id, brand, year, price}}) => {
    return (
        <div className="border-2">
            <h3>ID: {id}, Brand: {brand}, Year: {year}, Price: {price}$</h3>
        </div>
    );
};

export default CarComponent;