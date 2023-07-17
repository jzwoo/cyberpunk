import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/">
                {/* public routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>

                {/* protected routes */}
                <Route path="user" element={<User/>}/>

                {/* catch all */}
                <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Route>
        </Routes>
    );
}

export default App;
