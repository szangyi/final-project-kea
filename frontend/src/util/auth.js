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
  const requestCookie = await authLoader();

  console.log(requestCookie)
  if (requestCookie == true) {
    return true;
  }
  else {
    return false;
  }
}
