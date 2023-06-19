import "./MiniCard.css"

import PeopleIcon from '@mui/icons-material/People';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import RouteIcon from '@mui/icons-material/Route';
import FlareIcon from '@mui/icons-material/Flare';
import { Card, Typography, Box } from "@mui/material";

import MiniCardComponent from "./MiniCard";
import MiniCard from "./MiniCard";


const MiniCardCollection = () => {

    return (
        <Box className="mini-card-collection">

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '15deg', bottom: '210px', right: '300px' }}
            >
                <FlareIcon fontSize="large" />
                <Typography variant="h5"> Achieve your dreams </Typography>
            </MiniCard>

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '-15deg', bottom: '350px', right: '60px' }}
            >
                <SportsGymnasticsIcon fontSize="large" />
                <Typography variant="h5"> Transform your life </Typography>
            </MiniCard>

            {/* <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '15deg', bottom: '80px', right: '35px' }}
            >
                <RouteIcon fontSize="large" />
                <Typography variant="h5"> Inspire your journey </Typography>
            </MiniCard> */}


        </Box>
    )
}


export default MiniCardCollection;