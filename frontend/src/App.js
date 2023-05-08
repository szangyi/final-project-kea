import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Banner from './components/Banner';
import Button from './components/Button';
import BokehBackground from './components/BokehBackground';
import AccountMenu from './components/AccountMenu';


function App() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('/api').then(res => setPeople(res.data))
    }, []);

    return (
        <div>
            <AccountMenu />
            <Banner />
            <section className='test'>
                <BokehBackground variant="dark" className="bokeh-background" />
                <Typography variant="h5">100% Real Followers.</Typography>
            </section>
        </div >
    )

    // return people.map((p, index) => {
    //     return (
    //         <div>
    //             <p key={index}>{p.id} {p.name} {p.age}</p>
    //             <MyCustomButton color="primary" variant="contained">My buttooooocks</MyCustomButton>
    //             <Typography variant="h1">Sa</Typography>
    //         </div>
    //     )
    // })
}

export default App;
