import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Ticker from "./components/Ticker/Ticker";

const App: React.FC = () => {

    return (
        <div className="app">
            <NavBar/>

            <div className="title-container">
                <div className="title">
                    CYBER
                </div>

                <p className="sub-title">
                    [コマース]
                </p>
            </div>

            <Ticker/>
        </div>
    );
}

export default App;
