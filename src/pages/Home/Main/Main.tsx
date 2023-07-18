import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Ticker from "../../../components/Ticker/Ticker";
import {Text} from "../../../constants/constants";
import "./Main.css"

const Main: React.FC = () => {
    return (
        <div className="main-container">
            <NavBar/>

            <div className="title-container pad-left">
                <div className="title">
                    CYBER
                </div>

                <p className="sub-title">
                    {`[${Text.CYBER_JAP}]`}
                </p>
            </div>

            <Ticker/>

            <div className="bottom-container">
                <p className="intro">
                    In an industry where seemingly everything has already been said.<span
                    style={{color: "gold"}}>{Text.ECOMMERCE_JAP}</span> seeks to comment more than state.
                    <span className="blink-caret"> Check out the new neohuman collection.</span>
                </p>

                <img className="image1" src="image1.jpg"/>

                {/* image2 is put in a div because for some reason the pic does not move up */}
                <div>
                    <img className="image2" src="image2.jpg"/>
                </div>
            </div>

            <div className="scroll-container">
                <a href="#products">
                    SCROLL
                </a>

                <a href="#products">
                    <span>{`[${Text.SCROLL_JAP}]`}</span>
                </a>
            </div>
        </div>
    )
}

export default Main;