// --------------------------
// REACT ---------------
// --------------------------
import { useState, useEffect } from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Box, Typography, Divider } from "@mui/material"


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"
import MiniCardCollection from "../Card/MiniCardCollection";
import MiniCardCollectionSmall from "../Card/MiniCardCollectionSmall";
import MiniCardCollectionInfluencer from "../Card/MiniCardCollectionInfluencer";


// --------------------------
// UTILS ---------------
// --------------------------
import { handleWindowSizeChange } from '../../util/detectMediaQuery'


// --------------------------
// STYLES ---------------
// --------------------------
import "./Banner.css"



const Banner = (props) => {

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
        <Box component="section" className="banner" variant={props.variant} >

            {showMeshGradient && <MeshGradient variant={props.variant} />}

            {mediaQuery === 'desktop' ? (
                <>
                    {props.miniCardsEnabled && <MiniCardCollection />}
                    {props.miniCardsEnabledInfluencer && <MiniCardCollectionInfluencer />}
                    {props.miniCardsEnabledSmall && <MiniCardCollectionSmall />}
                </>
            ) : (
                <></>
            )}

            < Box className="text-container bannerPadding" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignText: 'left',
            }}>

            {props.headline1 ? <Typography variant="h1">{props.headline1}</Typography> : null}
            {props.headline2 ? <Typography variant="h1">{props.headline2}<Box sx={{ color: "white", display: 'inline-block' }}>.</Box></Typography> : null}
            {props.divider ? <Divider /> : null}
            {props.copy1 ? <Typography sx={{ mt: 2 }} >{props.copy1} </Typography> : null}
            {props.copy2 ? <Typography >{props.copy2}</Typography> : null}
            {props.button ? <MyCustomButton sx={{ mt: 4, width: 'fit-content' }} href={props.href} >{props.button}</MyCustomButton> : null}
        </Box>

        </Box >
    )
}


export default Banner;