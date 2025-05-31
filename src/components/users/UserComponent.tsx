import {FC} from "react";
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserPropsType = {
    item: IUser
}

const UserComponent:FC<UserPropsType> = ({item:{name, username, phone, id}}) => {

    return (
        <div className="border-2 border-violet-600">
            <h3>Name: {name}, Username: {username}, Phone: {phone}</h3>
            <Link href={`/users/${id}`} >!CLICK HERE TO OPEN THIS USER PAGE!</Link>
        </div>
    );
};

export default UserComponent;