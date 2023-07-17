import React from "react";
import Main from "./Main";
import Products from "./Products";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <>
            <div className='full-vh' style={{backgroundColor: 'black'}}>
                <Main/>
            </div>

            <div className='full-vh' style={{backgroundColor: 'red'}}>
                <Products/>
            </div>

            <div className='full-vh' style={{backgroundColor: 'brown'}}>
                {"TODO"}
            </div>
        </>
    )
}

export default Home;