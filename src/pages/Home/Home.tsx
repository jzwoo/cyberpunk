import React from "react";
import Main from "./Main/Main";
import Products from "./Products/Products";

const Home: React.FC = () => {
    return (
        <div>
            <Main/>

            <Products/>

            <div style={{backgroundColor: 'brown'}}>
                {"TODO"}
            </div>
        </div>
    )
}

export default Home;