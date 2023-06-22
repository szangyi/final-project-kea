// --------------------------
// MATERIAL UI ---------------
// --------------------------
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import RouteIcon from '@mui/icons-material/Route';
import FlareIcon from '@mui/icons-material/Flare';
import { Typography, Box } from "@mui/material";


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MiniCard from "./MiniCard";


// --------------------------
// STYLES ---------------
// --------------------------
import "./MiniCard.css"



const MiniCardCollection = () => {

    return (

        <Box className="mini-card-collection">

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '-15deg', bottom: '230px', right: '260px' }}
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

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '15deg', bottom: '80px', right: '35px' }}
            >
                <RouteIcon fontSize="large" />
                <Typography variant="h5"> Inspire the journey </Typography>
            </MiniCard>

        </Box>
    )
}


export default MiniCardCollection;