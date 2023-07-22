import React from "react";
import {Text} from "../../constants/constants";
import SearchBar, {SearchBarProps} from "./SearchBar/SearchBar";
import "./FilterBar.css";

const FilterBar: React.FC<SearchBarProps> = (props) => {
    const {placeholder, onEnter} = props;

    return (
        <div className="filterBar">
            <div className="titleContainer">
                <span className="filterBar-title">STORE</span>
                <span className="filterBar-sub-title">{`[${Text.STORE_JAP}]`}</span>
            </div>

            <SearchBar placeholder={placeholder} onEnter={onEnter}/>
        </div>
    )
}

export default FilterBar
