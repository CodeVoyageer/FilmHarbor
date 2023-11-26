import React from "react";
import '../App.css'
import Header from "../components/HomePage/Header/header.jsx";
import FooterComponent from "../components/HomePage/Footer/footer.jsx";
import PopularMoviesComponent from "../components/MoviesPageComponents/popularMovies.jsx";
import LatestMoviesComponent from "../components/MoviesPageComponents/actionMovies.jsx";
import PopularAdventureMoviesList from "../components/MoviesPageComponents/adventureMovies.jsx";
import PopularAnimationMoviesList from "../components/MoviesPageComponents/animationMovies.jsx";

const MoviesPage = () => {
    return (
        <>
            <Header/>
            <PopularMoviesComponent/>
            <LatestMoviesComponent/>
            <PopularAdventureMoviesList/>
            <PopularAnimationMoviesList/>
            <FooterComponent/>
        </>
    )
}

export default MoviesPage