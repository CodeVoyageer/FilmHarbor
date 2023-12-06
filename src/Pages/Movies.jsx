import React from "react";
import '../App.css'
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import PopularAdventureMoviesList from "../Components/MoviesPage/adventureMovies.jsx";
import PopularAnimationMoviesList from "../Components/MoviesPage/animationMovies.jsx";
import PopularHorrorMoviesList from "../Components/MoviesPage/horrorMovies.jsx";
import PopularHistoryMoviesList from "../Components/MoviesPage/historyMovies.jsx";
import PopularThrillerMoviesList from "../Components/MoviesPage/thrillerMovies.jsx";
import PopularDramaMoviesList from "../Components/MoviesPage/dramaMovies.jsx";
import PopularRomanticMoviesList from "../Components/MoviesPage/romanticMovies.jsx";
import HomePopularMovies from "../Components/HomePage/Recommendation/homePopularMovies.jsx";
import PopularActionMoviesList from "../Components/MoviesPage/actionMovies.jsx";

const MoviesPage = () => {
    return (
        <>
            <Header/>
            <HomePopularMovies/>
            <PopularActionMoviesList/>
            <PopularAdventureMoviesList/>
            <PopularAnimationMoviesList/>
            <PopularHorrorMoviesList/>
            <PopularHistoryMoviesList/>
            <PopularThrillerMoviesList/>
            <PopularDramaMoviesList/>
            <PopularRomanticMoviesList/>
            <FooterComponent/>
        </>
    )
}

export default MoviesPage