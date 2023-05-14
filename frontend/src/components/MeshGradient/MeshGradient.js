
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
    })

    return (
        <canvas id="gradient-canvas" data-transition-in variant={props.variant}/>
    )
}

export default MeshGradient;







