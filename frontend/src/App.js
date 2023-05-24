import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from "./theme/theme.js"

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from './components/Banner/Banner';
import NavLoggedin from './components/Navigation/NavLoggedin';
import NavLoggedout from './components/Navigation/NavLoggedout';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';

// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import LoggedinHome from './pages/LoggedinHomePage'
import AccountInfo from './pages/AccountInfo';
import InfluencerPage from './pages/InfluencerPage'
import CreateProfilePage from './pages/CreateProfilePage';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import Page404 from './pages/Page404'
import { authLoader } from './util/auth';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/home", element: <LoggedinHome />},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <Signup />},
  {path: "/my-interests", element: <HomePage />},
  {path: "/account-info", element: <AccountInfo />, loader: authLoader},
  {path: "/dashboard", element: <InfluencerPage />, loader: authLoader},
  {path: "/collection", element: <CollectionPage />, loader: authLoader},
  {path: "/create-profile", element: <CreateProfilePage />, loader: authLoader},
  {path: "/profile/:username", element: <ProfileLandingPage />, loader: authLoader},
  {path: '*', element: <Page404 replace />},

]);




const App = () => {
    return (
        <React.Fragment>
                {/* <NavLoggedin /> */}
                <NavLoggedout />
                {/* <Banner /> */}
                <RouterProvider router={router} />
        </React.Fragment>
    );

}

export default App;
