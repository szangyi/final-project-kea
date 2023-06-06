import "./Banner.css"

import {useState, useEffect} from 'react';
import { Box, Typography, Divider } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"

const BannerAdvanced = (props) => {

    const [showMeshGradient, setShowMeshGradient] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMeshGradient(true);
        }, 50);

        return () => clearTimeout(timeoutId); // Cleanup the timeout if the component unmounts before the timeout is reached
    }, []);

    return (
        <Box component="section" className="banner banner-advanced" variant="large" >

            {/* <MeshGradient variant="large"></MeshGradient> */}

            {showMeshGradient && <MeshGradient variant={props.variant} />}


            <Box className="text-container bannerPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignText: 'left'
            }}>
                <Typography variant="h1">{props.headline1}</Typography>
                <Typography variant="h2">{props.headline3}</Typography>
                <Typography variant="h2">{props.headline4}</Typography>

                {props.divider ? <Divider /> : ''}

                <Typography sx={{ mt: 2 }} >{props.copy1}</Typography>
                <Typography >{props.copy2}</Typography>
                <MyCustomButton sx={{ mt: 4 }}>{props.button}</MyCustomButton>
            </Box>

        </Box>
    )
}


export default BannerAdvanced;