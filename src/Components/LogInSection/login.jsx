import React, { useState } from "react";
import './login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../Context/Context.jsx";
import RegistrationForm from "./RegistrationForm.jsx";



const LogInSection = ({ onLogin }) => {
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);
    const [isRegisterFormVisible, setRegisterFormVisible] = useState(false);
    const { login, user } = useUser();
    const [loginError, setLoginError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const loginResult = await login(e.target.email.value, enteredPassword);
            if (loginResult?.error) {
                console.error("Login error:", loginResult.error);
                setLoginError(true);
            } else {
                setLoginError(false);
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginError(true);
        }
        window.location.reload();
    };

    const handleCancelRegistrationForm = () => {
        setLoginFormVisible(true);
        setRegisterFormVisible(false);
    };

    const handleShowRegistrationForm = () => {
        setLoginFormVisible(false);
        setRegisterFormVisible(true);
    };

    return (
        <>

            {isRegisterFormVisible && (
                <RegistrationForm onCancel={handleCancelRegistrationForm} />
            )}
            {isLoginFormVisible && (
                <section className='login_section'>
                    <div className='login_content'>
                        <h1 className='login_content_heading'>Login to your account</h1>
                        <form onSubmit={handleLogin}>
                            <div className='login_content_input'>
                                <label htmlFor="email">
                                    <FontAwesomeIcon className='input-icon' icon={faUser} size='lg' />
                                </label>
                                <input
                                    placeholder='Email'
                                    type="text"
                                    id="email"
                                    name="email"
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
                                <p className='login-forgot-link' >Forgotten password</p>
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
