'use client'

import {saveCar} from "@/server-actions/serverActions";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {ICar} from "@/models/ICar";

const FormComponent = () => {

    const {register, handleSubmit, formState: {errors , isValid}} =
        useForm<ICar>({mode:"all", resolver:joiResolver(carValidator)});

    const customHandler = (data: ICar) => {
        saveCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div className='border-2 border-violet-600'>
                    <input type="text" placeholder={'enter car brand'} {...register('brand')}/>
                    {errors.brand && <div>{errors.brand?.message}</div>}
                </div>

                <div className='border-2 border-violet-600'>
                    <input type="number" placeholder={'enter car price'} {...register('price')}/>
                    {errors.price && <div>{errors.price?.message}</div>}
                </div>

                <div className='border-2 border-violet-600'>
                    <input type="number" placeholder={'enter car year'} {...register('year')}/>
                    {errors.year && <div>{errors.year?.message}</div>}
                </div>
                <button className='border-2' disabled={!isValid}>save-car</button>
            </form>
        </div>
    );
};

export default FormComponent;