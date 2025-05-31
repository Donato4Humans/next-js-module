import axios from 'axios';
import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const {data: users} = await axiosInstance.get('/users');
        return users;
    },
    getUserById: async (id:string): Promise<IUser> => {
        const {data: user} = await axiosInstance.get('/users/' + id);
        return user;
    }
}

export const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const {data : posts} = await axiosInstance.get('/posts');
        return posts;
    },
    getPostById: async (id:string): Promise<IPost> => {
        const {data: post} = await axiosInstance.get('/posts/' + id);
        return post;
    }
}

export const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const {data : comments} = await axiosInstance.get('/comments');
        return comments;
    },
    getCommentById: async (id:string): Promise<IComment> => {
        const {data: comment} = await axiosInstance.get('/comments/' + id);
        return comment;
    }
}