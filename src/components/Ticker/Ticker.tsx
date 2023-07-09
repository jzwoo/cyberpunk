import React from "react";
import "./Ticker.css";
import {Text} from "../../constants/constants";

const Ticker: React.FC = () => {

    const renderListItems = () => {
        const items = [];

        for (let i = 0; i < 20; i++) {
            const color = i % 2 === 0 ? "white" : "gold";
            items.push(<li style={{color}} key={i}>{Text.ECOMMERCE_JAP}</li>);
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