'use client'

import {FC, useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import {userService} from "@/services/api.service";
import UserComponent from "@/components/users/UserComponent";

type UserByIdPropsType = {
    id: string
}

const UserDetailsComponent:FC<UserByIdPropsType> = ({id}) => {

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        userService.getUserById(id).then(userById => {
           setUser(userById);
        });
    }, [id]);

    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <div>
            <h3> <UserComponent item={user}/></h3>
            <p>Email: {user.email}, Website: {user.website}</p>
            <p>Address: {user.address.city}, Company: {user.company.name}</p>
        </div>
    );
};

export default UserDetailsComponent;