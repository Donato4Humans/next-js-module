import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{id: string}>
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `User ${id} page title`,
    }
}

const UserPage:FC<Props> = async ({searchParams}) => {

    const {data} = await searchParams;
    let obj = null;
    if(typeof data === "string"){
        obj = JSON.parse(data) as IUser; // FOR NORMAL APPROACH - MAKE HELPER-CAST FUNCTION IN FILE
    }

    return (
        <div>
            {
             obj && <>User page content: {obj.name}, {obj.id}</>
            }
        </div>
    );
};

export default UserPage;