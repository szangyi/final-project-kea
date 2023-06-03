import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';

export function LogOutAPI(){

    Cookies.remove("token");
    return redirect("/login");
}
