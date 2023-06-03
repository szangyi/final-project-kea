import { useState } from "react";
import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';

export function getAuthToken(){
    const token = Cookies.get("token");
    return token;
}

export function authLoader(){
    const token = getAuthToken();

    if(!token){
        return redirect("/login");
    }
    else{
        return null;
    }
}

export function useAuth(){

    // What should be here?

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = getAuthToken();

    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
    return isLoggedIn
}


export function tokenLoader(){
    const token = getAuthToken();

    if(token){
        return token
    }
    else{
        return null;
    }

    // return getAuthToken();
}