import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";
import {FC} from "react";
import Link from "next/link";

type CommentPropsType = {
    item: IComment
}

const CommentComponent:FC<CommentPropsType> = ({item: {id, name}}) => {
    return (
        <div className="border-2 border-violet-600">
            <h3>Name: {name}</h3>
            <Link href={`/comments/${id}`} >!CLICK HERE TO OPEN THIS COMMENT PAGE!</Link>
        </div>
    );
};

export default CommentComponent;