import React, {useEffect, useState} from "react";
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import {useNavigate} from "react-router-dom";
import {useUser} from "../Components/Context/Context.jsx";


import LogInSection from "../Components/LogInSection/login.jsx";

const LogInComponent = () => {
    const { user, login } = useUser();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const handleLogin = (enteredPassword) => {
        const loginSuccess = login(enteredPassword);
        if (!loginSuccess) {
            setLoginError(true);
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/MyList");
        }
    }, [user, navigate]);

    if (user) {
        return null;
    }

    return (
        <>
            <Header />
            <LogInSection onLogin={handleLogin} loginError={loginError} />
            <FooterComponent />
        </>
    );
};

export default LogInComponent;