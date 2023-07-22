import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import Store from "./pages/Store/Store";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* public routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="store" element={<Store/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>

            {/* protected routes */}
            <Route path="user" element={<User/>}/>

            {/* catch all */}
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
}

export default App;
