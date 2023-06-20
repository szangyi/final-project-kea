import "./MiniCard.css";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import PeopleIcon from '@mui/icons-material/People';

const MiniCard = styled(Card)(({ theme }) => ({
    // backgroundColor: 'white !important' ,
    borderRadius: '15px',
    position:'absolute',
    height: '200px',
    width: '200px',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}));

// const MiniCardComponent = (props) => {
//     return (
//         <MiniCard>
//             <Box className="mini-card">
//                 <PeopleIcon></PeopleIcon>
//                 <Typography variant="h6"> Boost account awareness </Typography>
//                 {/* <Typography variant="h1">{props.headline1}</Typography>
//                      <Typography>{props.copy2}</Typography> */}
//                 <p>Csaaaaaooo</p>
//             </Box>
//         </MiniCard>
//     );
// };

// export default MiniCardComponent;
export default MiniCard;
