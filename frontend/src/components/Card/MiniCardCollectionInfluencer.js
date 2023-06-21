// --------------------------
// MATERIAL UI ---------------
// --------------------------
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { Typography, Box } from "@mui/material";

// --------------------------
// COMPONENTS ---------------
// --------------------------
import MiniCard from "./MiniCard";


// --------------------------
// STYLES ---------------
// --------------------------
import "./MiniCard.css"



const MiniCardCollectionInfluencer = () => {

    return (
        <Box className="mini-card-collection">

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '15deg', bottom: '210px', right: '300px' }}
            >

                <AutoGraphIcon fontSize="large" />
                <Typography variant="h5"> Inspire and empower </Typography>
            </MiniCard>

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '-15deg', bottom: '350px', right: '60px' }}
            >
                <OpenWithIcon fontSize="large" />
                <Typography variant="h5">Expand your reach </Typography>
            </MiniCard>

        </Box>
    )
}


export default MiniCardCollectionInfluencer;