import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {

    const renderListItems = () => {
        const items = [];

        for (let i = 0; i < 20; i++) {
            const color = i % 2 === 0 ? "white" : "gold";
            items.push(<li style={{color}} key={i}>サイバー</li>);
        }

        return items;
    };


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

            <div className="ticker" id="ticker">
                <ul>
                    {renderListItems()}
                </ul>
            </div>
        </div>
    );
}

export default App;
