import {FC} from "react";

type Props = {
    params: { id:string }
}
const UserPage:FC<Props> = async ({params}) => {

    const {id} = await params;

    return (
        <div>
            User {id} page content
        </div>
    );
};

export default UserPage;