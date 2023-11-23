import React from 'react';
import './header.scss';


const Header = () => {
    return (
        <>
            <section className="headerContainer">
                <div className='logo-container'>
                    <p className='logo'>Film</p><p className='logo-second'>Harbor</p>
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
            </section>
        </>
    );
};


export default Header;
