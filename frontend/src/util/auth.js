import ValidateCookieAPI from "../api/ValidateCookieAPI";
import { redirect } from "react-router-dom";
export const authLoader = async (value) => {
    const isCookie = await ValidateCookieAPI(value);
    return isCookie

};

export async function navLoader() {
    const valuePrivate = "private"
    const requestCookie = await authLoader(valuePrivate);

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
       return redirect("/home")

    }
    else {
        return false;
    }
}

async function checkPublic(){
    const valuePublic = "public"
    const requestCookiePublic = await authLoader(valuePublic);
    
    return requestCookiePublic;
    
}


