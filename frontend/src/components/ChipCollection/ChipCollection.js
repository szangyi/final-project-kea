import "./ChipCollection.css"

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const categories = ['Travel', 'Health', 'Personal Development', 'Food', 'Technology', 'Fashion'];

const ChipCollection = (props) => {

    return (

        <Box className="chip-collection-section sectionPadding" sx={{ backgroundColor: 'customColors.blue.dark', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <Typography variant="h3" sx={{ color: "white" }}>{props.headline}</Typography>
            <Typography sx={{ color: "white" }}>{props.copy}</Typography>
            <Box maxWidth='sm' sx={{
                marginTop: 6,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 3,
            }} >
                {categories.map(category => (
                    <Chip icon={<CheckCircleIcon />} color='salmon' key={category} label={category} />
                ))}
            </Box>
        </Box>
    )
}


export default ChipCollection;