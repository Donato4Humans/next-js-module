import {getCars} from "@/server-actions/serverActions";
import CarComponent from "@/components/cars/CarComponent";

const CarsComponent = async () => {

    const cars = await getCars();

    return (
        <div>
            {cars.map((car) => <CarComponent key={car.id} item={car}/>)}
        </div>
    );
};

export default CarsComponent;