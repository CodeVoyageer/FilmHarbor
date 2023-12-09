import React from "react";
import './myListSection.scss';
import {useMovies} from "../Context/Context.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


const MyListSection = () => {
    const {movies, removeMovie} = useMovies();
    const handleRemoveMovie = (movie) => {
        removeMovie(movie)
    }
    return (
        <>
            <section className='myListSection'>
                <h1 className='myListHeading'> Your watch list:</h1>
                <div className='myListContent'>
                    {movies.map((movie, index) => (
                        <div key={movie.id} className="data-item">
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            )}
                            <div className="film-introduce-container">
                                <p className="film-introduce">
                                    <span className="film-introduce_info">Title:</span>{" "}
                                    {movie.title} {movie.name}
                                </p>
                                <p className="film-introduce">
                                    <span className="film-introduce_info">Year:</span>{" "}
                                    {movie.release_date} {movie.first_air_date}
                                </p>
                                <p className="film-introduce">
                                    <span className="film-introduce_info">Rating:</span>{" "}
                                    {movie.vote_average}
                                </p>
                                <p className="film-introduce">
                                    <span className="film-introduce_info">Description:</span>{" "}
                                    {movie.overview}
                                </p>
                            </div>
                            <div>
                                <button className='removeFromList' onClick={() => handleRemoveMovie(movie)}><FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </div>
                        </div>
                    ))};
                </div>
            </section>
        </>
    );
};

export default MyListSection;

