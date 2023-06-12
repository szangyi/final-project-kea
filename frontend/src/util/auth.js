import ValidateCookieAPI from "../api/ValidateCookieAPI";
import { redirect } from "react-router-dom";
export const authLoader = async (value) => {
    console.log("here")
    const isCookie = await ValidateCookieAPI(value);
    console.log(isCookie)

    return isCookie

};

export async function navLoader() {
    console.log('navloader runs')
    const valuePrivate = "private"
    const requestCookie = await authLoader(valuePrivate);
    console.log(requestCookie)

    if (requestCookie == false) {
        return redirect("/login")
    }
    else {
        return true;
    }
}

export async function navLoaderPublic(requestCookiePublic) {

    requestCookiePublic = await checkPublic();
    if (requestCookiePublic == true) {
        console.log('youare logged in')
       return redirect("/home")

    }
    else {
        console.log('youare NOOTT logged in')
        return false;
    }
}

async function checkPublic(){
    const valuePublic = "public"
    const requestCookiePublic = await authLoader(valuePublic);
    
    return requestCookiePublic;
    
}


