import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Button from '@mui/material/Button';

import Login from './components/LoginSignup/Login';
import HomePage from './pages/HomePage';
import HomePageLoggedIn from './pages/HomePageLoggedIn';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/home", element: <HomePageLoggedIn />},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <HomePage />},
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



