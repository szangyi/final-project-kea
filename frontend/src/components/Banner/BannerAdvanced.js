import "./Banner.css"

import { useState, useEffect } from 'react';
import useSearchParams, { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"
import MyCustomButton from "../Button/Button"
import MiniCardCollection from "../Card/MiniCardCollection";
import { handleWindowSizeChange } from '../../util/detectMediaQuery'
import Category from "../Category/Category";
import SoMe from "../SoMe/SoMe";


const BannerAdvanced = (props) => {

    const [mediaQuery, setMediaQuery] = useState("");
    const [customFilter, setCustomFilter] = useState("")
    const [showMeshGradient, setShowMeshGradient] = useState(false);
    const nav = useNavigate();


    const handleCategoryChange = (value) => {
        setCustomFilter((prevFilter) => ({
            ...prevFilter,
            category: value,
        }));
    };

    const handleSoMeChange = (value) => {
        setCustomFilter((prevFilter) => ({
            ...prevFilter,
            social: value,
        }));
    };

    console.log({ customFilter })

    const handleSubmit = () => {
        const filters = {
            social: customFilter.social || 'All',
            category: customFilter.category || 'All categories',
        };
        console.log(filters)
        nav(`/collection/?categoryFilter=${filters.category}&someFilter=${filters.social}`, { state: { filters } });
        // nav(`/collection/`, { state: { filters } });
    };

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
                    <MiniCardCollection />
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
                <Typography variant="h2">I'm looking for a</Typography>

                <Category
                    onCategoryChange={handleCategoryChange}
                    customFilters
                />

                <SoMe onSoMeChange={handleSoMeChange} />

                <Typography variant="h2">influencer on</Typography>

                <Typography sx={{ mt: 2 }} >Discover Youtube, TikTok, and Instagram influencers</Typography>

                <MyCustomButton onClick={handleSubmit} sx={{ mt: 4, width: 'fit-content' }}>Discover</MyCustomButton>

            </Box>

        </Box>
    )
}


export default BannerAdvanced;