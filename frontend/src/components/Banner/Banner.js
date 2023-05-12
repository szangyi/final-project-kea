import "./Banner.css"
import BokehBackground from "../BokehBackground/BokehBackground"
import { Typography } from "@mui/material"
import MeshGradient from "../MeshGradient/MeshGradient"

const Banner = (props) => {

    return (
        <section>

            <MeshGradient></MeshGradient>
            {/* <BokehBackground variant="light" className="bokeh-background"></BokehBackground> */}

            <div className="text-container">
                <Typography variant="h1">This is a Banner</Typography>
            </div>
        </section>
    )
}


export default Banner;