import React from "react";
import './footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
    return (
        <>
            <section className='footerSection'>
                <div className='footerSection_logo'>
                    <h1 className='logo'>Film</h1><h1 className='logo-second'>Harbor</h1>
                </div>
                <div>
                    <p className='footerDescription'>simple aplication for my first project<a href='https://github.com/CodeVoyageer'><FontAwesomeIcon icon={faGithub} size="2x"  style={{color: "#ffffff",}}/></a></p>
                </div>
            </section>

        </>
    )
}
export default FooterComponent