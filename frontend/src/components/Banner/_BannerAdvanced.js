import "./Banner.css"

import { useState, useEffect } from 'react';
import { Box, Typography, Divider } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"
import MiniCardCollection from "../Card/MiniCardCollection";
import { handleWindowSizeChange } from '../../util/detectMediaQuery'


const BannerAdvanced = (props) => {

    const [mediaQuery, setMediaQuery] = useState("");
    const [showMeshGradient, setShowMeshGradient] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMeshGradient(true);
        }, 100);

        return () => clearTimeout(timeoutId); // Cleanup the timeout if the component unmounts before the timeout is reached
    }, []);

    useEffect(() => {
        const handleResize = () => handleWindowSizeChange(setMediaQuery);
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <Box component="section" className="banner banner-advanced" variant="large" >

            {showMeshGradient && <MeshGradient variant={props.variant} />}

            {mediaQuery === 'desktop' ? (
                <>
                    {props.miniCardsEnabled && <MiniCardCollection />}
                </>
            ) : (
                <></>
            )}

            <Box className="text-container bannerPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignText: 'left'
            }}>
                <Typography variant="h2">{props.headline3}</Typography>
                <Typography variant="h2">{props.headline4}</Typography>
                <Typography sx={{ mt: 2 }} >{props.copy1}</Typography>
                <Typography >{props.copy2}</Typography>
                <MyCustomButton href={props.href} sx={{ mt: 4, width: 'fit-content' }}>{props.button}</MyCustomButton>

            </Box>

        </Box>
    )
}


export default BannerAdvanced;