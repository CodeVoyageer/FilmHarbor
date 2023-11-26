import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const SimpleSlider = ()=> {
    const [popularSeries, setPopularSeries] = useState([]);

    useEffect(() => {
        const fetchPopularSeries = async () => {
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
                setPopularSeries(result.results);
            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error);
            }
        };

        fetchPopularSeries();
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
    return(
        <>
            <section className='slider-section'>
                <h1 className='slider-section_headeing'>The most popular movies:</h1>
        <button className='slider-prev-button' onClick={() => slider?.current?.slickPrev()}><FontAwesomeIcon icon={faChevronLeft} size='2x' style={{color: "#ffffff",}}  /></button>
    <Slider ref={slider} {...settings}>
        {popularSeries.length > 0 && popularSeries.map((item) => (
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

    </Slider>
    <button className='slider-next-button' onClick={() => slider?.current?.slickNext()}><FontAwesomeIcon icon={faChevronRight} size='2x'  style={{color: "#ffffff",}} /></button>
            </section>
</>
)
}
export default SimpleSlider;
