import React, {useState} from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import { useUser} from "../../Context/Context.jsx";


const Header = () => {
    const { user, logout } = useUser();

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
                        <li><Link to='/' className='navigation_link'>Home</Link></li>
                        <li><Link to='/Movies' className='navigation_link'>Movies</Link></li>
                        <li><Link to='/Series' className='navigation_link'>Series</Link></li>
                        <li><Link to='/Mylist' className='navigation_link'>Mylist</Link></li>
                        {!user && <li><Link to='/LogIn' className='navigation_link'>Log in</Link></li>}
                        {user && <li onClick={logout} className='navigation_link'>Log out</li>}
                    </ul>
                </nav>
            </section>
        </>
    );
};


export default Header;
