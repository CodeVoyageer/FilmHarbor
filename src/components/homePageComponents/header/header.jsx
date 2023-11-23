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
                        <li><a href='/FilmHarborApp/src/pages/Home.jsx'>Home</a></li>
                        <li><a href='/Movies.jsx'>Movies</a></li>
                        <li><a>Series</a></li>
                        <li><a>Mylist</a></li>
                        {/*<li>MyCalendar</li>*/}
                        <li><a>Profile</a></li>
                    </ul>
                </nav>
            </section>
        </>
    );
};


export default Header;
