import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../Context/Context.jsx";

import './login.scss';

const LogInformation = () => {
    const { user } = useUser();
    return (
        <>
            <section className='logInformation'>
                {user ? (
                    <span className='logInformation_text'>You are logged in. Explore MyList!</span>
                ) : (
                    <>
                        <span className='logInformation_text'>Log in to see MyList</span>
                        <Link to='/LogIn'>
                            <button className='logInformation_button'>
                                Log in
                            </button>
                        </Link>
                    </>
                )}
            </section>
        </>
    );
};

export default LogInformation;
