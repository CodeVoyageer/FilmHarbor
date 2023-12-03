
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {useMovies} from "../../Context/Context.jsx";


const PopularMoviesComponent = ()=> {
    const [randomMovies, setRandomMovies] = useState([]);
    const { addMovie } = useMovies();

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoPlay: true
    };
    const slider = React.useRef(null);
    const handleAddToWatchlist = (movie) => {
        addMovie(movie);
    }
    return(
        <>
            <section className='slider-section'>
                <h1 className='slider-section_headeing'>The most popular Movies:</h1>
                <button className='slider-prev-button' onClick={() => slider?.current?.slickPrev()}><FontAwesomeIcon icon={faChevronLeft} size='2x' style={{color: "#ffffff",}}  /></button>
                <Slider ref={slider} {...settings}>
                    {randomMovies.length > 0 && randomMovies
                        .filter((item) => item.overview)
                        .map((item) => (
                            <div key={item.id} className="data-item">
                                {item.poster_path && (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                    />
                                )}
                                <div className="film-introduce-container">
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Title:</span>{" "}
                                        {item.title}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Year:</span>{" "}
                                        {item.release_date}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Rating:</span>{" "}
                                        {item.vote_average}
                                    </p>
                                    <p className="film-introduce">
                                        <span className="film-introduce_info">Description:</span>{" "}
                                        {item.overview}
                                    </p>
                                </div>
                                <div>

                                    <button className='addToList' onClick={() => handleAddToWatchlist(item)}>Add</button>
                                </div>
                            </div>
                        ))}

                </Slider>
                <button className='slider-next-button' onClick={() => slider?.current?.slickNext()}><FontAwesomeIcon icon={faChevronRight} size='2x'  style={{color: "#ffffff",}} /></button>
            </section>
        </>
    )
}
export default PopularMoviesComponent;