import React from "react";
import '../App.css'
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import PopularMoviesComponent from "../Components/MoviesPage/popularMovies.jsx";
import LatestMoviesComponent from "../Components/MoviesPage/actionMovies.jsx";
import PopularAdventureMoviesList from "../Components/MoviesPage/adventureMovies.jsx";
import PopularAnimationMoviesList from "../Components/MoviesPage/animationMovies.jsx";
import PopularHorrorMoviesList from "../Components/MoviesPage/horrorMovies.jsx";
import PopularHistoryMoviesList from "../Components/MoviesPage/historyMovies.jsx";
import PopularThrillerMoviesList from "../Components/MoviesPage/thrillerMovies.jsx";
import PopularDramaMoviesList from "../Components/MoviesPage/dramaMovies.jsx";
import PopularRomanticMoviesList from "../Components/MoviesPage/romanticMovies.jsx";

const MoviesPage = () => {
    return (
        <>
            <Header/>
            <PopularMoviesComponent/>
            <LatestMoviesComponent/>
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