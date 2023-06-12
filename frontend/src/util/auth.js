import { useState } from "react";
import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import ValidateCookieAPI from "../api/ValidateCookieAPI";


export const authLoader = async () => {
  const isCookie = await ValidateCookieAPI();
  if (!isCookie) {
    return redirect('/login');
  } else {
    return true;
  }
};


export async function navLoader() {
  console.log('navloader runs')
  const requestCookie = await authLoader();
  if (requestCookie == true) {
    return true;
  }
  else {
    return false;
  }
}
