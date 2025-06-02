const UsersPage = async () => {

    // USING SSG(STATIC-SITE-GENERATION) FOR PAGE RENDERING(FOR STATIC PAGES WITHOUT API CALLS OR OTHER DYNAMIC COMPONENTS)
    // NEXT MAKES CACHE OF OUR FETCH-API-CALL AND WE WILL SEE ON RENDERED PAGE ONLY CACHED INFO(CACHED ON BUILD) WITHOUT UPDATES FROM API(IF NO REVALIDATE OR OTHER CAUSES)

    // APPROACH IS FOR PAGES THAT RARELY UPDATES

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return (
        <div>
            {
                users.map((user: {id: number, name: string}) => <div key={user.id}> {user.name} </div>)
            }
        </div>
    );
};

export default UsersPage;