import {userService} from "@/services/api.service";
import Link from "next/link";

const UsersComponent = async () => {

    const users = await userService.getAllUsers();

    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.id} - {user.name}</Link>
                </div>)
            }
        </div>
    );
};

export default UsersComponent;