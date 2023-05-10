import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [username, setEnteredUsername] = useState('');
    const [firstName, setEnteredFirstName] = useState('');
    const [lastName, setEnteredLastName] = useState('');
    const [email, setEnteredEmail] = useState('');
    const [password, setEnteredPassword] = useState('');
    const nav = useNavigate();

    const submitHandler = async(event) =>{
        event.preventDefault();

        try {   
            const response = await axios.post('/signup', { username, firstName, lastName, email, password });
            const message = response.data.message;

            if (message == "success"){
                nav('/login');
            }
            else{
                console.log(message)
            }

          } catch (error) {
            console.error('Signup failed');
        }
    

    }


    return (
        <form onSubmit={submitHandler}>
            <label>First name</label>
            <input type="text" placeholder="" onChange={e => setEnteredFirstName(e.target.value)}></input>  
            <label>Last name</label>
            <input type="text" placeholder="" onChange={e => setEnteredLastName(e.target.value)}></input> 
            <label>Username</label>
            <input type="text" placeholder="" onChange={e => setEnteredUsername(e.target.value)}></input> 
            <label>Email</label>
            <input type="email" placeholder="" onChange={e => setEnteredEmail(e.target.value)}></input>   
            <label>Password</label>
            <input type="password" placeholder="" onChange={e => setEnteredPassword(e.target.value)}></input>  

            <button>Submit</button>
        </form>
    );
};

export default Signup;