import React from "react";
import "./FloatingImage.css";

const FloatingImage: React.FC = () => {
    return (
        <>
            <img className="image1" src="image1.jpg"></img>
            <img className="image2" src="image2.jpg"></img>
        </>
    )
}

export default FloatingImage;