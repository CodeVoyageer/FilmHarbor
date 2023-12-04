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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Movies'>Movies</Link></li>
                        <li><Link to='/Series'>Series</Link></li>
                        <li><Link to='/Mylist'>Mylist</Link></li>
                        {!user && <li><Link to='/LogIn'>Log in</Link></li>}
                        {user && <li onClick={logout}>Log out</li>}
                    </ul>
                </nav>
            </section>
        </>
    );
};


export default Header;
