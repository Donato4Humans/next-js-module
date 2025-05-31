'use client'

import {useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import {userService} from "@/services/api.service";
import UserComponent from "@/components/users/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers().then(allUsers => {
            setUsers(allUsers);
        });
    }, []);

    return (
        <div className="text-center">
            {users.map((user) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;