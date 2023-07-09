import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Ticker from "./components/Ticker/Ticker";
import {Text} from "./constants/constants";

const App: React.FC = () => {

    return (
        <div className="app">
            <NavBar/>

            <div className="title-container">
                <div className="title">
                    CYBER
                </div>

                <p className="sub-title">
                    {`[${Text.CYBER_JAP}]`}
                </p>
            </div>

            <img className="image1" src="image1.jpg"></img>
            <img className="image2" src="image2.jpg"></img>

            <Ticker/>

            <p className="intro">
                In an industry where seemingly everything has already been said.<span
                style={{color: "gold"}}>{Text.ECOMMERCE_JAP}</span> seeks to comment more than state.
                <span className="blink-caret">Check out the new neohuman collection.</span>
            </p>

            <div className="scroll">
                SCROLL
            </div>
        </div>
    );
}

export default App;
