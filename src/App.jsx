import React, {Component} from 'react';
import {MoviesProvider} from "./Components/Context/Context.jsx";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home.jsx";
import MoviesPage from "./Pages/Movies.jsx";
import SeriesPage from "./Pages/Series.jsx";
import LogInComponent from "./Pages/logIn.jsx";
import MyList from "./Pages/myList.jsx";


function App() {
    return (
        <div className="app">
            <MoviesProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Movies' element={<MoviesPage/>}/>
                    <Route path='/Series' element={<SeriesPage/>}/>
                    <Route path='/LogIn' element={<LogInComponent/>}/>
                    <Route path='/MyList' element={<MyList/>}/>
                </Routes>
            </HashRouter>
            </MoviesProvider>
        </div>
    );
}

export default App;
