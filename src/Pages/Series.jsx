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
import PopularFamilySeriesList from "../Components/SeriesPage/family.jsx";
import PopularKidsSeriesList from "../Components/SeriesPage/kids.jsx";
import PopularMysterySeriesList from "../Components/SeriesPage/mystery.jsx";
import PopularNewsSeriesList from "../Components/SeriesPage/news.jsx";
import PopularRealitySeriesList from "../Components/SeriesPage/reality.jsx";
import PopularWarSeriesList from "../Components/SeriesPage/war.jsx";



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
            <PopularFamilySeriesList/>
            <PopularKidsSeriesList/>
            <PopularMysterySeriesList/>
            <PopularNewsSeriesList/>
            <PopularRealitySeriesList/>
            <PopularWarSeriesList/>
<FooterComponent/>
        </>
    )
}

export default SeriesPage