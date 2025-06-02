import {revalidatePath} from "next/cache";

const UsersPage = async () => {

    // PART-1
    // USING SSG(STATIC-SITE-GENERATION) FOR PAGE RENDERING(FOR STATIC PAGES WITHOUT API CALLS OR OTHER DYNAMIC COMPONENTS)
    // NEXT MAKES CACHE OF OUR FETCH-API-CALL AND WE WILL SEE ON RENDERED PAGE ONLY CACHED INFO(CACHED ON BUILD) WITHOUT UPDATES FROM API(IF NO REVALIDATE OR OTHER CAUSES)

    // APPROACH IS FOR PAGES THAT RARELY UPDATES
    // ALSO STATIC APPROACH IS FASTER FOR LOADING PAGES(OPPOSITE TO DYNAMIC RENDERING)

    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json());
    // PART-1

    //PART-3
    // HERE WE USE COMBINED APPROACH CALLED ISR(INCREMENTAL-STATIC-REGENERATION) THAT BUILD PAGE ON DEMAND IN STATIC-WAY
    // BUT WHEN OUR REVALIDATE TIMER ENDS AND CLIENT(USER) MAKES NEW DEMAND, PAGE WILL REGENERATE ON SERVER AND UPDATE CONTENT
    // BEFORE TIMER ENDS CLIENT WILL GET OUR CACHED STATIC PAGE

    const users = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 5}})// HERE 5 IS TIMER IN SECONDS
        .then(value => value.json()); // IF WE SET REVALIDATE TO 0-SEC OUR ISR WILL BECOME SSR AND PAGE WILL BE DYNAMIC-RENDERED AGAIN

    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-cache'}) // DISABLED CACHE WILL ALSO MAKE PAGE DYNAMICALLY-RENDERED
    //     .then(value => value.json());

    return (
        <div>
            {
                users.map((user: {id: number, name: string}) => <div key={user.id}> {user.name} </div>)
            }
        </div>
    );
};

export default UsersPage;