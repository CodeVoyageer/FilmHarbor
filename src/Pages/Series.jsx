import React from "react";
import '../App.css'
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import PopularSeriesSlider from "../Components/HomePage/Recommendation/popularSeries.jsx";
import PopularActionSeriesList from "../Components/SeriesPage/actionAndAdventures.jsx";
import PopularAnimationSeriesList from "../Components/SeriesPage/animation.jsx";
import PopularComedySeriesList from "../Components/SeriesPage/comedy.jsx";
import PopularCrimeSeriesList from "../Components/SeriesPage/crime.jsx";
import PopularDocumentarySeriesList from "../Components/SeriesPage/documentary.jsx";
import PopularDramaSeriesList from "../Components/SeriesPage/drama.jsx";


const SeriesPage =() =>{
    return(
        <>
<Header/>
<PopularSeriesSlider/>
            <PopularActionSeriesList/>
            <PopularAnimationSeriesList/>
            <PopularComedySeriesList/>
            <PopularCrimeSeriesList/>
            <PopularDocumentarySeriesList/>
            <PopularDramaSeriesList/>
<FooterComponent/>
        </>
    )
}

export default SeriesPage