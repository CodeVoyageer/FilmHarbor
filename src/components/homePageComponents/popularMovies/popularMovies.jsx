import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./popularMovies.scss";

const PopularMoviesComponent = () => {
    const [randomMovies, setRandomMovies] = useState([]);

    useEffect(() => {
        const fetchRandomMovies = async () => {
            const url =
                "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZjZTJhYzhmMTkzNWI4M2U0OGFjM2Y4NmE4Zjc1YyIsInN1YiI6IjY1NTk1MzQ5Y2EwZTE3MDBhZGJmYjc5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H3Dca6WGQQvXshw7UiA9Ubpirz1e6piIp8QVZHKmWKY",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setRandomMovies(result.results);
            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error);
            }
        };

        fetchRandomMovies();
    }, []);

    return (
        <section className="popular-movies-section">
            <h2 className="popular-movies-heading">Najpopularniejsze filmy:</h2>
            <div className="popular-movies-container">
                {randomMovies.length > 0 ? (
                    <Carousel showThumbs={false} showStatus={false} showArrows={true} infiniteLoop={true} emulateTouch={true} swipeable={true} showIndicators={true} centerMode={true}  autoPlay={true} centerSlidePercentage={20} className='custom-carousel'>
                        {randomMovies.map((item) => (
                            <div key={item.id} className="data-item">
                                {item.poster_path && (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                    />
                                )}
                                <div className="film-introduce-container">
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Tytuł:</span>{" "}
                                        {item.title}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Rok:</span>{" "}
                                        {item.release_date}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Ocena:</span>{" "}
                                        {item.vote_average}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Opis:</span>{" "}
                                        {item.overview}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <p>Brak dostępnych filmów.</p>
                )}
            </div>
        </section>
    );
};

export default PopularMoviesComponent;