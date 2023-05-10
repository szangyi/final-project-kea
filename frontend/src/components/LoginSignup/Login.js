import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    
    const loginHandler = async(event) =>{
        event.preventDefault();
        try {   
            const response = await axios.post('/login', { email, password });
            const token = response.data.jwt;
            const error = response.data.error;

            
            if (token){
                Cookies.set('token', token, { expires: expirationDate });
                nav('/home');
            }
            else{
                console.log(error)
            }

          } catch (error) {
            console.error('Login failed:', error.response.error);
        }
    }


    return (
        <form onSubmit={loginHandler}>
            <label>Email</label>
            <input type="email" placeholder="" onChange={e => setEmail(e.target.value)}></input>   
            <label>Password</label>
            <input type="password" placeholder="" onChange={e => setPassword(e.target.value)}></input>  

            <button>Submit</button>
        </form>
    );
};

export default Login;