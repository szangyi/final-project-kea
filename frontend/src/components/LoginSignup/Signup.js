import React, { useState } from 'react';

const Signup = () => {

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');


    const submitHandler = (event) =>{
        event.preventDefault();
    
        const loginFormData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword
        };
    
        console.log(loginFormData)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>First name</label>
            <input type="text" placeholder="" onChange={e => setEnteredFirstName(e.target.value)}></input>  
            <label>Last name</label>
            <input type="text" placeholder="" onChange={e => setEnteredLastName(e.target.value)}></input> 
            <label>Email</label>
            <input type="email" placeholder="" onChange={e => setEnteredEmail(e.target.value)}></input>   
            <label>Password</label>
            <input type="password" placeholder="" onChange={e => setEnteredPassword(e.target.value)}></input>  

            <button>Submit</button>
        </form>
    );
};

export default Signup;