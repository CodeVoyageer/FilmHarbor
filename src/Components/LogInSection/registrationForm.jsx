import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "./supabase";
import "./login.scss";

const RegistrationForm = ({ onRegistration, onCancel }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        onCancel();

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error("Błąd rejestracji:", error);
                alert("Wystąpił błąd rejestracji. Spróbuj ponownie.");
            } else {
                alert("Rejestracja zakończona pomyślnie!");
                onRegistration(email, password);
            }
        } catch (error) {
            console.error("Błąd rejestracji:", error);
            alert("Wystąpił błąd rejestracji. Spróbuj ponownie.");
        }
    };

    return (
        <>
            <section className="login_section">
                <div className="login_content">
                    <h1 className="login_content_heading">Register your account</h1>
                    <form onSubmit={handleRegistration}>
                        <div className="login_content_input">
                            <label htmlFor="email">
                                <FontAwesomeIcon
                                    className="input-icon"
                                    icon={faUser}
                                    size="lg"
                                />
                            </label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="password">
                                <FontAwesomeIcon
                                    className="input-icon"
                                    icon={faLock}
                                    size="lg"
                                />
                            </label>
                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-button-container">
                            <button className="login-button" type="submit">
                                REGISTER
                            </button>
                            <button className='login-button' onClick={onCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default RegistrationForm;
