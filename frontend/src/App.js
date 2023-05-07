import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Button from '@mui/material/Button';

import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import HomePage from './pages/HomePage';
import HomePageLoggedIn from './pages/HomePageLoggedIn';
import { authLoader } from './util/auth';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/home", element: <HomePageLoggedIn />, loader: authLoader},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <Signup />},
  {path: "/collection", element: <HomePage />},
  {path: "/my-page", element: <HomePage />},
  {path: "/collection", element: <HomePage />},
  {path: "/my-interests", element: <HomePage />},
  {path: "/account-info", element: <HomePage />},
  {path: "/dashboard", element: <HomePage />},
  {path: "/collection", element: <HomePage />},
  {path: "/register", element: <HomePage />},
  {path: "/my-profiles", element: <HomePage />},

]);

const App = () => {

  // const [token, setToken] = useState();


  return (
    <RouterProvider router={router} />
  );
}

export default App;



