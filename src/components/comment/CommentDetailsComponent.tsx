'use client'

import {FC, useEffect, useState} from "react";
import {commentService} from "@/services/api.service";
import {IComment} from "@/models/IComment";
import CommentComponent from "@/components/comments/CommentComponent";

type CommentByIdPropsType = {
    id: string
}

const CommentDetailsComponent:FC<CommentByIdPropsType> = ({id}) => {

    const [comment, setComment] = useState<IComment | null>(null);

    useEffect(() => {
        commentService.getCommentById(id).then(commentById => {
            setComment(commentById);
        });
    }, [id]);

    if (!comment) {
        return <div>Comment not found</div>;
    }

    return (
        <div>
            <h3> <CommentComponent item={comment}/></h3>
            <p>Comment: {comment.body}</p>
        </div>
    );
};

export default CommentDetailsComponent;