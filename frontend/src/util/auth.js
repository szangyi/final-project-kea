import { useState } from "react";
import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import ValidateCookieAPI from "../api/ValidateCookieAPI";
// return redirect('/login'); // redirect not working anymore


export const authLoader = async (onlyCheck) => {
    console.log('authLoader runnns')
    console.log(onlyCheck)
    const isCookie = await ValidateCookieAPI(onlyCheck);
    console.log(isCookie)
    
    if (!isCookie) {
        return false
    } else {
        return true;
    }

};

export async function navLoader() {
    console.log('navloader runs')
    const requestCookie = await authLoader();
    console.log(requestCookie)

    if (requestCookie == false) {
        return window.location.href = '/login';
    }
    else {
        return true;
    }
}

export async function navLoaderPublic() {
    console.log('navloaderPUBLICOOO runs')
    const onlyCheck = "valami";
    const requestCookie = await authLoader(onlyCheck);
    console.log(requestCookie)

    if (requestCookie == true) {
        console.log('youare logged in')
        return null
        // return window.location.href = '/home';
    }
    else {
        return false;
    }
}