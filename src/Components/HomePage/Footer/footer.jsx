import React from "react";
import './footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <>
            <section className='footerSection'>
                <Link className='logo_link' to='/'>
                    <div className='footerSection_logo'>
                        <h1 className='logo'>Film</h1><h1 className='logo-second'>Harbor</h1>
                    </div>
                </Link>
                <div className='footerDescription-section'>
                    <p className='footerDescription'>Simple app for my first project<a
                        href='https://github.com/CodeVoyageer'><FontAwesomeIcon icon={faGithub} size="2x"
                                                                                style={{color: "#ffffff",}}/></a></p>
                </div>
            </section>

        </>
    )
}
export default FooterComponent