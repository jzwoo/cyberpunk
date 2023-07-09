import React from "react";
import {Text} from "../../constants/constants";
import Ticker from "../Ticker/Ticker";
import "./Home.css";
import FloatingImage from "../FloatingImage/FloatingImage";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="title-container">
                <div className="title">
                    CYBER
                </div>

                <p className="sub-title">
                    {`[${Text.CYBER_JAP}]`}
                </p>
            </div>

            <Ticker/>

            <p className="intro">
                In an industry where seemingly everything has already been said.<span
                style={{color: "gold"}}>{Text.ECOMMERCE_JAP}</span> seeks to comment more than state.
                <span className="blink-caret"> Check out the new neohuman collection.</span>
            </p>

            <div className="scroll-container">
                <a href="#products">
                    SCROLL
                </a>

                <a href="#products">
                    <span style={{color: "gold"}}>{`[${Text.SCROLL_JAP}]`}</span>
                </a>
            </div>

            <FloatingImage/>
        </div>
    )
}

export default Home;