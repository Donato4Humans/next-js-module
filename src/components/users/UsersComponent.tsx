import {userService} from "@/services/api.service";
import Link from "next/link";

const UsersComponent = async () => {

    const users = await userService.getAllUsers();

    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                    <Link href={{pathname: `/users/${user.id}`, query: {data: JSON.stringify(user)} }}>{user.id} - {user.name}</Link>
                </div>)
            }
        </div>
    );
};

export default UsersComponent;