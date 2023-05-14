import "./TextBox.css"

import { Box, Typography } from "@mui/material"
import MyCustomButton from "../Button/Button"

const TextBox = (props) => {

    return (
        <Box component="section" className="textbox sectionPadding" >

            <Box className="text-container" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}>

                <Typography variant="h3">{props.headline}</Typography>
                <Typography  sx={{mt: 2}} >{props.copy1}</Typography>
                <Typography>{props.copy2}</Typography>
                <MyCustomButton sx={{mt: 4}}>{props.button}</MyCustomButton>
            </Box>

        </Box>
    )
}


export default TextBox;