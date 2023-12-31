// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Box, Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


// --------------------------
// UTILS ---------------
// --------------------------
import {CATEGORYOPTIONS} from '../../util/Constants'


// --------------------------
// STYLES ---------------
// --------------------------
import "./ChipCollection.css"




const ChipCollection = (props, ) => {
    return (

        <Box className="chip-collection-section sectionPadding" sx={{ backgroundColor: 'customColors.blue.dark', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <Typography variant="h3" sx={{ color: "white" }}>{props.headline}</Typography>
            <Typography sx={{ color: "white", width: {xs: '100%', md: '70%'} }}>{props.copy}</Typography>
            <Box maxWidth='sm' sx={{
                marginTop: 6,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 3,
            }} >
                

                {CATEGORYOPTIONS.map(category => (
                    <Chip icon={<CheckCircleIcon style={{ color:"customColors.salmon.dark !important" }} />} color='background' key={category.category} label={category.category} />
                ))}
            </Box>
        </Box>
    )
}


export default ChipCollection;