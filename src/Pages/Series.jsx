import React from "react";
import '../App.css'
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import PopularSeriesSlider from "../Components/HomePage/Recommendation/popularSeries.jsx";
import PopularActionSeriesList from "../Components/SeriesPage/actionAndAdventures.jsx";
import PopularAnimationSeriesList from "../Components/SeriesPage/animation.jsx";


const SeriesPage =() =>{
    return(
        <>
<Header/>
<PopularSeriesSlider/>
            <PopularActionSeriesList/>
            <PopularAnimationSeriesList/>
<FooterComponent/>
        </>
    )
}

export default SeriesPage