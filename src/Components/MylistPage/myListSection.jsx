import React from "react";
import './myListSection.scss';
import {useMovies} from "../Context/Context.jsx";

const MyListSection = () => {
    const { movies } = useMovies();
    return (
        <>
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
                        {movie.title}
                    </p>
                    <p className="film-introduce">
                        <span className="film-introduce_info">Year:</span>{" "}
                        {movie.release_date}
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
            </div>
                ))};
        </>
    );
};

export default MyListSection;

