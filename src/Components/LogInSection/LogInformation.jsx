import React from "react";
import {Link} from "react-router-dom";
import './login.scss';
const LogInformation = () => {
    return (
        <>
            <section className='logInformation'>
                <span className='logInformation_text'>Log in to see MyList</span>
                <Link to='/LogIn'>
                    <button className='logInformation_button'>
                        Log in
                    </button>
                </Link>
            </section>
        </>
    );
};
export default LogInformation;