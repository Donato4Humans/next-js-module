const UsersPage = async () => {

    const users = await fetch('http://localhost:3000/users/api').then(res => res.json());

    return (
        <div>
            {
                users.map((user:{id: number, name: string}) => (<div key={user.id}> {user.name} </div>))
            }
        </div>
    );
};

export default UsersPage;