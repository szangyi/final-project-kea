import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import CreateProfile from '../components/Influencer/CreateProfile';

const CreateProfilePage = () => {

    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [bioDescription, setBioDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youTube, setYouTube] = useState('');
    const [tikTok, setTikTok] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const token = Cookies.get('token');
    const nav = useNavigate();




    const createProfileHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/create-profile', { username, location, bioDescription, website, instagram, youTube, tikTok, category, tags }, {
                headers: {
                    Authorization: `${token}`,
                }
            });

            nav('/dashboard');


            console.log(response)

        } catch (error) {
            console.error('Login failed:', error.response.error);
        }
    }






    return (

            <React.Fragment>

                <CreateProfile></CreateProfile>
                <div>
            <h2>Basic info</h2>
            <p>Some copy to explain the section</p>
            <form onSubmit={createProfileHandler}>
            <label>Username</label>
            <input type="text" placeholder="" onChange={e => setUsername(e.target.value)}></input>   
            <label>Location</label>
            <input type="text" placeholder="" onChange={e => setLocation(e.target.value)}></input>   
            <label>Bio Description</label>
            <input type="text" placeholder="" onChange={e => setBioDescription(e.target.value)}></input>   
            <label>Website</label>
            <input type="text" placeholder="" onChange={e => setWebsite(e.target.value)}></input>   
            <label>Instagram</label>
            <input type="text" placeholder="" onChange={e => setInstagram(e.target.value)}></input>   
            <label>YouTube</label>
            <input type="text" placeholder="" onChange={e => setYouTube(e.target.value)}></input>  
            <label>TikTok</label>
            <input type="text" placeholder="" onChange={e => setTikTok(e.target.value)}></input>  
            <label>Category</label>
            <input type="text" placeholder="" onChange={e => setCategory(e.target.value)}></input> 
            <label>Tags</label>
            <input type="text" placeholder="" onChange={e => setTags(e.target.value)}></input> 
            <button>Submit</button>

            </form>
    </div>
            </React.Fragment>
    
    );




}

export default CreateProfilePage;