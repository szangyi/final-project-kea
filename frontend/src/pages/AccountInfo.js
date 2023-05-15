import NavLoggedin from '../components/Navigation/NavLoggedin'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';



const AccountInfo = () => {

    const [userData, setUserData] = useState(null);
    const token = Cookies.get('token');

    const getUserData = async () => {
        try {
            const response = await axios.get('/api/account-info', {
                headers: {
                    Authorization: `${token}`,
                }
            });
            const userData = response.data;
            const error = response.data.error;

            setUserData(userData);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    getUserData();

    if (userData === null) {
        return <div>Loading your data...</div>;
    }

    return (
        <>
            <NavLoggedin />
            <div>Hi {userData.username}</div>
            <div>First name {userData.firstName}</div>
            <div>last name {userData.lastName}</div>
            <div>username {userData.username}</div>
            <div>image {userData.image}</div>

        </>
    );

}

export default AccountInfo;


