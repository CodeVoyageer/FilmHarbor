import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <section className="headerContainer">
                <Link className='logo_link' to='/'>
                <div className='logo-container'>
                        <p className='logo'>Film</p><p className='logo-second'>Harbor</p>
                </div>
                </Link>
                <nav className='navigation'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Movies'>Movies</Link></li>
                        <li><Link to='/Series'>Series</Link></li>
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
