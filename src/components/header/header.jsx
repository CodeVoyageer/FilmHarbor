import React from 'react';
import './header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <div className='logo-container'>
                    <p className='logo'>Film</p><p className='logo-second'>Harbor</p>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Wyszukaj..."
                    />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>


                </div>
                <nav className='navigation'>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Series</li>
                        <li>Mylist</li>
                        <li>MyCalendar</li>
                        <li>Profile</li>
                    </ul>
                </nav>
            </div>
        </>
    );
};


export default Header;
