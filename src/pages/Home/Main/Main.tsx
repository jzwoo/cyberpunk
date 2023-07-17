import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Ticker from "../../../components/Ticker/Ticker";
import {Text} from "../../../constants/constants";
import "./Main.css"

const Main: React.FC = () => {
    return (
        <div>
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

            <p className="intro pad-left">
                In an industry where seemingly everything has already been said.<span
                style={{color: "gold"}}>{Text.ECOMMERCE_JAP}</span> seeks to comment more than state.
                <span className="blink-caret">Check out the new neohuman collection.</span>
            </p>

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