import React from "react";
import Main from "./Main/Main";
import Products from "./Products";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <Main/>
            </div>

            <div style={{backgroundColor: 'red'}}>
                <Products/>
            </div>

            <div style={{backgroundColor: 'brown'}}>
                {"TODO"}
            </div>
        </div>
    )
}

export default Home;