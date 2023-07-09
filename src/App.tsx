import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {

    return (
        <div className="app">
            <NavBar/>

            <Home/>

            <Products/>
        </div>
    );
}

export default App;
