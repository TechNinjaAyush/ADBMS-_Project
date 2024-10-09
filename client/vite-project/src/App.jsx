import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Authentication/login';
import Register from '../Authentication/register';
import Home from '../componenets/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Login" />} />

                <Route path="/login" element={<Login />} />
               <Route  path = '/Register'  element = {<Register/>}/>
               <Route  path = '/Home'  element = {<Home/>}/>

               
            </Routes>
        </Router>
    );
}

export default App;

