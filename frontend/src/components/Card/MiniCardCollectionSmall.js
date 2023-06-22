// --------------------------
// MATERIAL UI ---------------
// --------------------------
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Typography, Box } from "@mui/material";


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MiniCard from "./MiniCard";


// --------------------------
// STYLES ---------------
// --------------------------
import "./MiniCard.css"




const MiniCardCollectionSmall = () => {

    return (
        <Box className="mini-card-collection">

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '15deg', bottom: '210px', right: '300px' }}
            >
                <WhatshotIcon fontSize="large" />
                <Typography variant="h5"> Fuel your ambition </Typography>
            </MiniCard>

            <MiniCard className="mini-card glassmorphism"
                sx={{ rotate: '-15deg', bottom: '350px', right: '60px' }}
            >
                <EmojiPeopleIcon fontSize="large" />
                <Typography variant="h5"> Discover your role models </Typography>
            </MiniCard>

        </Box>
    )
}


export default MiniCardCollectionSmall;