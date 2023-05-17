
import "./MeshGradient.css"
import React, { useEffect } from "react";
import { Gradient } from "./GradientRaw";


const MeshGradient = (props) => {
    useEffect(() => {

        // Create your instance
        const gradient = new Gradient()

        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')

        console.log(document.querySelector('#gradient-canvas'))
    }, []); // Empty dependency array ensures that the effect runs only once

    return (
        <canvas id="gradient-canvas" data-transition-in variant={props.variant} />
    )
}

export default MeshGradient;







