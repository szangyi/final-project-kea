import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from './components/Banner';
import NavLoggedin from './components/Navigation/NavLoggedin';
import NavLoggedout from './components/Navigation/NavLoggedout';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';

// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import AccountInfo from './pages/AccountInfo';

// --------------------------
// UTILS --------------------
// --------------------------
import { authLoader } from './util/auth';



const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/my-page", element: <HomePage /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/my-interests", element: <HomePage /> },
    { path: "/account-info", element: <AccountInfo />, loader: authLoader },
    { path: "/dashboard", element: <HomePage /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/register", element: <HomePage /> },
    { path: "/my-profiles", element: <HomePage /> },
]);



const App = () => {
    return (
        <React.Fragment>
            <NavLoggedin />
            <Banner />
            <RouterProvider router={router} />
        </React.Fragment>
    );

}

export default App;