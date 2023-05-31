import "./TextBox.css"
import { Link } from 'react-router-dom';


import { Box, Typography } from "@mui/material"
import MyCustomButton from "../Button/Button"

const TextBox = (props) => {

    return (
        <Box component="section" className="textbox" sx={{mt: 5}} >

            <Box className="text-container sectionPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: props.bg,
                color: props.color,
            }}>

                <Typography variant="h3">{props.headline}</Typography>
                <Typography  sx={{mt: 2}} >{props.copy1}</Typography>
                <Typography>{props.copy2}</Typography>
                <MyCustomButton component={Link} to={'/collection'} sx={{mt: 4}}>{props.button}</MyCustomButton>
            </Box>

        </Box>
    )
}


export default TextBox;