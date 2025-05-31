import {IPost} from "@/models/IPost";
import {FC} from "react";
import Link from "next/link";

type PostPropsType = {
    item: IPost
}

const PostComponent:FC<PostPropsType> = ({item: {id, title}}) => {
    return (
        <div>
            <div className="border-2 border-violet-600">
                <h3>Title: {title}</h3>
                <Link href={`/posts/${id}`} >!CLICK HERE TO OPEN THIS POST PAGE!</Link>
            </div>
        </div>
    );
};

export default PostComponent;