import { removeAuthToken } from '../util/auth';


export function LogOutAPI(){
    removeAuthToken();
}
