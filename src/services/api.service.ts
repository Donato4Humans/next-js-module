import axios from 'axios';
import {IUser} from "@/models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const {data: users} = await axiosInstance.get('/users');
        return users;
    },
}