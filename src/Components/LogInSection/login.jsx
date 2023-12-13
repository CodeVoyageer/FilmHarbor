import React, { useState } from "react";
import './login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../Context/Context.jsx";
import ChangePassword from "./ChangePassword";
import RegistrationForm from "./registrationForm.jsx";

const LogInSection = ({ onLogin, loginError}) => {
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);
    const [isRegisterFormVisible, setRegisterFormVisible] = useState(false);
    const { user, setUser } = useUser();


    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(enteredPassword);
    };
    const handleShowChangePassword = () => {
        setLoginFormVisible(false);
        setChangePasswordVisible(true);
    };

    const handleCancelChangePassword = () => {
        setLoginFormVisible(true);
        setChangePasswordVisible(false);
    };
    const handleCancelRegistrationForm = () => {
        setLoginFormVisible(true);
        setRegisterFormVisible(false);
    };


    const handleChangePassword = (newPassword) => {
        setEnteredPassword(newPassword);
        setUser((prevUser) => ({
            ...prevUser,
            password: newPassword,
        }));
        setLoginFormVisible(true);
        setChangePasswordVisible(false);
    };


const handleShowRegistrationForm = ()=>{
    setLoginFormVisible(false);
    setRegisterFormVisible(true);
}

    return (
        <>
            {isRegisterFormVisible && (
                <RegistrationForm onCancel={handleCancelRegistrationForm}/>
            )}
            {isChangePasswordVisible && (
                <ChangePassword onCancel={handleCancelChangePassword} onPasswordChange={handleChangePassword} />
            )}
            {isLoginFormVisible && (
            <section className='login_section'>
                <div className='login_content'>
                    <h1 className='login_content_heading'>Login to your account</h1>
                    <form onSubmit={handleLogin}>
                        <div className='login_content_input'>
                            <label htmlFor="username">
                                <FontAwesomeIcon className='input-icon' icon={faUser} size='lg' />
                            </label>
                            <input
                                placeholder='Username'
                                type="text"
                                id="username"
                                name="username"
                                required
                            />
                            <label htmlFor='password'>
                                <FontAwesomeIcon className='input-icon' icon={faLock} size='lg' />
                            </label>
                            <input
                                placeholder='Password'
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={(e) => setEnteredPassword(e.target.value)}
                            />
                        </div>
                        <div className='login-button-container'>
                            <button className='login-button' type="submit">LOG IN</button>
                            <button className='login-button' type='button' onClick={handleShowRegistrationForm}>REGISTER</button>
                            <p className='login-forgot-link' onClick={handleShowChangePassword}>Forgotten password</p>
                        </div>
                    </form>
                    {loginError && <p className="login-error">Incorrect password. Please try again.</p>}
                </div>
            </section>
            )}
        </>
    );
};

export default LogInSection;
