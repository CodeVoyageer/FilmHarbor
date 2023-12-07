import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useUser } from '../../Context/Context.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, logout } = useUser();
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <>
            <section className={`headerContainer ${isNavOpen ? 'open' : ''}`}>
                <Link className='logo_link' to='/'>
                    <div className='logo-container'>
                        <p className='logo'>Film</p>
                        <p className='logo-second'>Harbor</p>
                    </div>
                </Link>
                <nav className={`navigation ${isNavOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to='/' className='navigation_link'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/Movies' className='navigation_link'>
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to='/Series' className='navigation_link'>
                                Series
                            </Link>
                        </li>
                        <li>
                            <Link to='/Mylist' className='navigation_link'>
                                Mylist
                            </Link>
                        </li>
                        {!user && (
                            <li>
                                <Link to='/LogIn' className='navigation_link'>
                                    Log in
                                </Link>
                            </li>
                        )}
                        {user && <li onClick={logout} className='navigation_link'>Log out</li>}
                    </ul>
                </nav>
                <button className='navHamburger' onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} size={'xl'} />
                </button>
            </section>
        </>
    );
};

export default Header;
