import React from "react";
import "./Ticker.css";

const Ticker: React.FC = () => {

    const renderListItems = () => {
        const items = [];

        for (let i = 0; i < 20; i++) {
            const color = i % 2 === 0 ? "white" : "gold";
            items.push(<li style={{color}} key={i}>サイバー</li>);
        }

        return items;
    };

    return (
        <div className="ticker">
            <ul>
                {renderListItems()}
            </ul>
        </div>
    )
}

export default Ticker;