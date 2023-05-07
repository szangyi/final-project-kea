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