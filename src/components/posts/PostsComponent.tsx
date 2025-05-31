'use client'

import {useEffect, useState} from "react";
import {postService} from "@/services/api.service";
import {IPost} from "@/models/IPost";
import PostComponent from "@/components/posts/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAllPosts().then(allPosts => {
            setPosts(allPosts);
        });
    }, []);

    return (
        <div className="text-center">
            {posts.map((post) => <PostComponent key={post.id} item={post}/>)}
        </div>
    );
};

export default PostsComponent;