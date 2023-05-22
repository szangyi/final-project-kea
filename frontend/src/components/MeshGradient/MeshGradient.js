import "./MeshGradient.css";
import React, { useEffect } from "react";

const MeshGradient = (props) => {
    useEffect(() => {
        import("./GradientRaw").then((module) => { // dynamic import to conditionally import Gradient module
            const Gradient = module.Gradient;

            // Create your instance
            const gradient = new Gradient();

            // Call `initGradient` with the selector to your canvas
            gradient.initGradient('#gradient-canvas');

            console.log(document.querySelector('#gradient-canvas'));
        }).catch((error) => {
            console.error("Failed to import Gradient module:", error);
        });
    }, []); // Empty dependency array ensures that the effect runs only once

    return (
        <canvas id="gradient-canvas" data-transition-in variant={props.variant} />
    );
};

export default MeshGradient;
