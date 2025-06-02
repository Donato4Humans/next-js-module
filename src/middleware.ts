import {NextRequest, NextResponse} from "next/server";

// BY DEFAULT THIS MIDDLEWARE LAYER WILL WORK ON EVERY PAGE THAT CLIENT RENDERS AND CAN INTERCEPT ALL page redirecting

// MOSTLY IT IS USED TO USE COOKIES-STORED INFO LIKE TOKENS OR LOCALISATION-INFO AND DO SOME ACTIONS WITH IT(AUTHENTICATION, CHANGE LANGUAGE)

export const middleware = async (request: NextRequest) => {
    console.log('middleware');

    // const login = request.cookies.get('login'); // example how to work with cookies and token auth
    // const password = request.cookies.get('password');
    // const token = await fetch('some-auth-page', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         key1: login,
    //         key2: password,
    //     })
    // }).then(value => value.json());

    // const token = 'asdkfja;lsdkfj120347092834a;lsdkf';
    // const response = NextResponse.next({
    //     headers: {
    //         Authorization: token
    //     }
    // });
    // return response;

    // if(locale === "EN"){
    //     fetch // english-localized content
    // }
    // return new NextResponse('asdf;lkajsd;lfk', {headers: {'xxx': 'yyyy'}, url: 'redirect after locale check'});

    // FOR CASES WHERE WE NEED DO SOME URL-SPECIFIC ACTIONS WE NEED TO CHECK IT WITH IF AND THEN DO ACTION but without config obj
    // if(request.url.startsWith('/api/')){
    //     // some action
    // }else if(request.url.startsWith('/swapi/')){
    //     // other action
    // }
    // THERE IS SPECIAL LIBRARY FOR SUCH CASES CALLED "NEMO" THAT CAN BE USED WITH CHAINED FUNCTIONS FOR DIFFERENT URLs
}

// USING CONFIG WE CAN SPECIFY WHAT ROUTES WILL TRIGGER MIDDLEWARE TO WORK
export const config = {
    // matcher: '/about/:path*', // HERE WE CAN USE URL-ROUTE OR REGULAR EXPRESSION
    matcher: '/auth',
    // matcher: '/auth/:path', // after authorization we can then check all secure paths about token availability
    // and after this check we can redirect further to secure services or route-handler for example
}