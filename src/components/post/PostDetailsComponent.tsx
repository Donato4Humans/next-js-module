'use client'

import {FC, useEffect, useState} from "react";
import {postService} from "@/services/api.service";
import {IPost} from "@/models/IPost";
import PostComponent from "@/components/posts/PostComponent";

type PostByIdPropsType = {
    id: string
}

const PostDetailsComponent:FC<PostByIdPropsType> = ({id}) => {

    const [post, setPost] = useState<IPost | null>(null);

    useEffect(() => {
        postService.getPostById(id).then(postById => {
            setPost(postById);
        });
    }, [id]);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h3> <PostComponent item={post}/></h3>
            <p>Post: {post.body}</p>
        </div>
    );
};

export default PostDetailsComponent;