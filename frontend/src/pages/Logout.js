import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';

export function logout(){
    alert('LOGOUT')

    Cookies.remove("token");
    return redirect("/login");
}
