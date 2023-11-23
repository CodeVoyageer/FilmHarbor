import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx";
import MoviesPage from "./pages/Movies.jsx";


function App() {
    return (
        <div className="app">
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Movies' element={<MoviesPage/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
