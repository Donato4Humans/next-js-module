import {FC} from "react";

type Props = {
    params: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const UserPage:FC<Props> = async ({params}) => {

    // PART-2
    // HERE WE USE SSR(SERVER-SITE-RENDERING) THAT BUILDS OUR PAGE OR COMPONENT EACH TIME DYNAMIC PARAMS CHANGES
    // WHOLE PAGE WILL BE STATIC(AND STORED IN CACHE WITHOUT DYNAMIC PART)
    // BUT PART WHERE WE HAVE DYNAMIC PARAMS WILL FINISH OUR template(CLIENT-READY PAGE) ONLY ON DEMAND

    // FOR SEO THIS APPROACH IS GOOD BECAUSE WE GET ALL PAGE WITH ALL TAGS AND CONTENT
    // BUT FOR SERVER-PERFORMANCE IT IS NOT GOOD BECAUSE OF MAKING BUILD EVERY TIME DYNAMIC PARAMS CHANGE

    const id = (await params).id;

    console.log(id);

    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json());

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserPage;