import "./Banner.css"

import { Box, Typography, Divider } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"

const Banner = (props) => {

    return (
        <Box component="section" className="banner" variant={props.variant} >

            <MeshGradient variant={props.variant}></MeshGradient>

            <Box className="text-container bannerPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignText: 'left'
            }}>
                {props.headline1 ? <Typography variant="h1">{props.headline1}</Typography> : null}
                {props.headline2 ? <Typography variant="h1">{props.headline2}<Box sx={{ color: "white", display: 'inline-block' }}>.</Box></Typography> : null}
                {props.divider ? <Divider /> : null}
                {props.copy1 ? <Typography  sx={{mt: 2}} >{props.copy1} </Typography> : null}
                {props.copy2 ? <Typography >{props.copy2}</Typography> : null}
                {props.button ? <MyCustomButton sx={{mt: 4}}>{props.button}</MyCustomButton> : null}
            </Box>

        </Box>
    )
}


export default Banner;