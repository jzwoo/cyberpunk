import React, {useState} from "react";
import "./SearchBar.css";

export interface SearchBarProps {
    placeholder?: string
    onEnter: (value?: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const {placeholder, onEnter} = props;
    const [value, setValue] = useState<string>("");

    return (
        <div className="search-bar-container">
            <input onChange={(input) => setValue(input.target.value)} placeholder={placeholder} spellCheck={false}
                   className="input"/>

            <button type="button" onClick={() => onEnter(value)} className="search-button">
                サーチ
            </button>
        </div>
    )
}

export default SearchBar;