import {FC} from "react";
import {Metadata} from "next";
import CommentDetailsComponent from "@/components/comment/CommentDetailsComponent";

type Props = {
    params: { id:string }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Comment ${id} page title`,
    }
}

const CommentPage:FC<Props> = async ({params}) => {

    const {id} = await params;

    return (
        <div className="text-center text-4xl">
            <h3>Comment-DETAILS</h3>
            <div>{<CommentDetailsComponent id={id}/>}</div>
        </div>
    );
};

export default CommentPage;