
// localhost:3000/hello/api [GET]
export const GET = async (request: Request, response: Response) => {

    // MAIN REASON TO USE SUCH SERVER-HANDLER IS TO HIDE SOME SENSITIVE INFO(API-KEYS OR TOKENS) WHILE CALLING API AND SENDING RESPONSE UNDER THE HOOD

    console.log('GET request route handler');

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    console.log(request);
    console.log(response);

    // return Response.json({message: request.url, status: 200}); // other way to use server-handler to check url status

    // OTHER PURPOSE IS FOR SIMPLE REDIRECTING BUT IT CAN BE DONE OTHER WAY

    response.headers.set('XXX', 'YYY'); // we can set headers to response  or get from request, etc.
    return Response.json(users);
}

// localhost:3000/hello/api [POST]
export const POST = () => {
    console.log('POST request route handler');
    return Response.json({message: 'POST request route handler'});
}

// ALSO SUCH HANDLER SUPPORT HTTP-METHODS: PUT, PATCH, DELETE, HEAD, OPTIONS