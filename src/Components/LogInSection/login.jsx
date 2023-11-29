import React from "react";
import './login.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";


const LogInSection = () => {
    return (
        <>
            <section className='login_section'>
                <div className='login_content'>
                    <h1 className='login_content_heading'>Login to your account</h1>
                    <div className='login_content_input'>
                        <label htmlFor="username"><FontAwesomeIcon className='input-icon' icon={faUser} size='lg'
                        /></label>
                        <input placeholder='Username' type="text" id="username" name="username" required/>
                        <label htmlFor='password'><FontAwesomeIcon className='input-icon' icon={faLock}
                                                                   size='lg'/></label>
                        <input placeholder='Password' type="password" id="password" name="password" required/>
                    </div>
                    <div className='login-button-container'>
                        <button className='login-button'>LOG IN</button>
                        <p className='login-forgot-link'>Forgotten password</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogInSection;