import {FC} from "react";
import {Metadata} from "next";
import PostDetailsComponent from "@/components/post/PostDetailsComponent";

type Props = {
    params: { id:string }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post ${id} page title`,
    }
}

const PostPage:FC<Props> = async ({params}) => {

    const {id} = await params;

    return (
        <div className="text-center text-4xl">
            <h3>Post-DETAILS</h3>
            <div>{<PostDetailsComponent id={id}/>}</div>
        </div>
    );
};

export default PostPage;