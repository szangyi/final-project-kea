import "./Banner.css"
import BokehBackground from "./BokehBackground.js"
import { Typography } from "@mui/material"


const Banner = (props) => {

    return (
        <section>
            <BokehBackground variant="light" className="bokeh-background"></BokehBackground>

            <div className="text-container">
                <Typography variant="h1">This is a Banner</Typography>
            </div>
        </section>
    )
}


export default Banner;