import React from "react";
import '../App.css'
import Header from "../components/homePageComponents/header/header.jsx";
import FooterComponent from "../components/homePageComponents/footerComponent/footer.jsx";
import SimpleSlider from "../components/SliderComponent/sliderComponent.jsx";
const MoviesPage = () => {
    return (
        <>
<Header/>
<SimpleSlider/>

<FooterComponent/>
        </>
    )
}

export default MoviesPage