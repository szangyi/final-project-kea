import { React } from 'react';
import { createBrowserRouter, RouterProvider, useRouteLoaderData } from 'react-router-dom';
import { authLoader, navLoader } from './util/auth';


// --------------------------
// COMPONENTS ---------------
// --------------------------


// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import InfluenceDashboardPage from './pages/InfluencerDashboard/InfluencerDashboardPage'
import CreateProfilePage from './pages/InfluencerDashboard/CreateProfilePage.js';
import UserDashboard from './pages/UserDashBoard/UserDashboard.js';
import AccountInfo from './pages/UserDashBoard/AccountInfo';
import Interests from './pages/UserDashBoard/Interests';
import Security from './pages/UserDashBoard/Security';
import RootLayoutNav from './pages/Root/RootLayoutNav.js';
import RootLayout from './pages/Root/RootLayout.js';
import { Navigate } from 'react-router-dom';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import UserCollectionPage from './pages/UserCollectionPage.js'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage';
import ErrorPage404 from './pages/ErrorPage404';



const App = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayoutNav />,
            id: 'root',
            loader: navLoader,
            children: [
                {
                    // errorElement: <ErrorPage />,
                    children: [
                        { index: true, element: <HomePage /> },
                        { path: "/login", element: <LoginPage /> },
                        { path: "/signup", element: <SignupPage /> },
                        {
                            path: "/user-dashboard", element: <UserDashboard />, loader: authLoader, children: [
                                { path: "/user-dashboard/", element: <Navigate to="account-info" replace /> }, // set account-info as default
                                { path: "/user-dashboard/account-info", element: <AccountInfo />, loader: authLoader },
                                { path: "/user-dashboard/security", element: <Security />, loader: authLoader },
                                { path: "/user-dashboard/interests", element: <Interests />, loader: authLoader },
                            ]
                        },
                        { path: "/user-collection", element: <UserCollectionPage />, loader: authLoader },
                        { path: "/influencer-dashboard", element: <InfluenceDashboardPage />, loader: authLoader },
                        { path: "/collection", element: <CollectionPage />, loader: authLoader },
                        { path: "/profile/:username", element: <ProfileLandingPage />, loader: authLoader },
                        { path: '*', element: <ErrorPage404 replace /> },
                    ],
                },
            ],
        },
        {
            path: '/create-profile',
            element: <RootLayout />,
            children: [
                { path: "/create-profile", element: <CreateProfilePage />, loader: authLoader },
            ]
        }

    ]);




    return (
        <>
            <RouterProvider router={router} />
        </>
    );

}

export default App;
