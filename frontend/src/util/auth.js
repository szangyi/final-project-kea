import { useState } from "react";
import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';

export function getAuthToken() {
  const token = Cookies.get('token');
  return token;
}

export function authLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  } else {
    return null;
  }
}

export function setAuthToken(token, ) {
  Cookies.set('token', token);
  window.location.href = '/';
}

export function removeAuthToken() {
  Cookies.remove('token');
  authLoader();
}


export function tokenLoader() {
  const token = getAuthToken();

  if (token) {
    return token
  }
  else {
    return null;
  }
}