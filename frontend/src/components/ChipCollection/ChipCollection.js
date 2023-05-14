import "./ChipCollection.css"

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChipCollection = (props) => {

    return (

        <Box className="chip-collection-section sectionPadding" sx={{ backgroundColor: 'customColors.blue.dark', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Typography variant="h3" sx={{ color: "white" }}>{props.headline1}</Typography>
            <Typography sx={{ color: "white" }}></Typography>
            <Box>
                <Chip icon={<CheckCircleIcon />} color='salmon' label="Travel" />
            </Box>
        </Box>
    )
}


export default ChipCollection;