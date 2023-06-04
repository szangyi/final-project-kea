import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import { removeAuthToken, useAuth } from '../util/auth';


export function LogOutAPI(){

    removeAuthToken();

}
