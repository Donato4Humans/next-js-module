'use client'

import {useEffect, useState} from "react";
import {commentService} from "@/services/api.service";
import {IComment} from "@/models/IComment";
import CommentComponent from "@/components/comments/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAllComments().then(allComments => {
            setComments(allComments);
        });
    }, []);

    return (
        <div className="text-center">
            {comments.map((comment) => <CommentComponent key={comment.id} item={comment}/>)}
        </div>
    );
};

export default CommentsComponent;