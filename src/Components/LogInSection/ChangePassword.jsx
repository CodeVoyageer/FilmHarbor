
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../Context/Context.jsx";
import './login.scss'

const ChangePassword = ({ onCancel, onPasswordChange }) => {
    const [newPassword, setNewPassword] = useState("");
    const { setNewPassword: setUserNewPassword } = useUser();
    const handleChangePassword = (e) => {
        e.preventDefault();
        setUserNewPassword(newPassword);
        setNewPassword("");
        onCancel();
    };

    return (
        <>

            <section className='login_section' >
                <div className="login_content">
                    <h1 className="login_content_heading">Change your password</h1>
                    <form onSubmit={handleChangePassword}>
                        <div className="login_content_input">
                            <label htmlFor='newPassword'>
                                <FontAwesomeIcon className='input-icon' icon={faLock} size='lg' />
                            </label>
                            <input
                                placeholder='New Password'
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                required
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className='login-button-container'>
                            <button className='login-button' type="submit" onClick={handleChangePassword}>Change Password</button>
                            <button className='login-button' onClick={onCancel}>Cancel</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
};

export default ChangePassword;
