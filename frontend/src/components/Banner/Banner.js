import "./Banner.css"

import { Box, Typography } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"

const Banner = (props) => {

    return (
        <Box component="section" className="banner" variant="large" >

            <MeshGradient variant="large"></MeshGradient>

            <Box className="text-container bannerPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignText: 'left'
            }}>
                <Typography variant="h1">{props.headline1}</Typography>
                <Typography variant="h1">{props.headline2}<Box sx={{ color: "white", display: 'inline-block' }}>.</Box></Typography>
                {/* <Typography variant="h1">.</Typography> */}
                <Typography  sx={{mt: 2}} >{props.copy1}</Typography>
                <Typography >{props.copy2}</Typography>
                <MyCustomButton sx={{mt: 4}}>{props.button}</MyCustomButton>
            </Box>

        </Box>
    )
}


export default Banner;