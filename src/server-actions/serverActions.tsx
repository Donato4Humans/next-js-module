"use server"

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db');


export const saveMeal = async (formData: FormData) => {

    //HERE WE WILL MAKE POST CALLS TO OTHER APIs IF NEEDED

    const titleValue = formData.get('title');

    db.prepare(`insert into meals(title) values (?)`)
        .run(titleValue);

    revalidatePath('/');
}

interface IMeal {
    id: number,
    title: string
}

export const getMeals = async ():Promise<IMeal[]> => {
    return db.prepare<IMeal[]>(`select * from meals`).all() as IMeal[];
}