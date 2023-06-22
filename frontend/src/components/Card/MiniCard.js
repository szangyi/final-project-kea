// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Card,  } from "@mui/material";
import { styled } from "@mui/system";


// --------------------------
// STYLES ---------------
// --------------------------
import "./MiniCard.css";


const MiniCard = styled(Card)(({ theme }) => ({
    borderRadius: '15px',
    position:'absolute',
    height: '200px',
    width: '200px',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}));

export default MiniCard;
