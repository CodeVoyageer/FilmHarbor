import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PopularDramaSeriesList = () => {
    const [popularDramaSeries, setPopularDramaSeries] = useState([]);

    useEffect(() => {
        const fetchPopularDramaSeries = async () => {
            const url = 'https://api.themoviedb.org/3/discover/tv';
            const genreId = 18;
            const apiKey = 'c2fce2ac8f1935b83e48ac3f86a8f75c';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
            };

            try {
                const response = await fetch(`${url}?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}`, options);
                const result = await response.json();
                setPopularDramaSeries(result.results);
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            }
        };

        fetchPopularDramaSeries();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoPlay: true,
    };

    const slider = React.useRef(null);

    return (
        <>
            <section className='slider-section'>
                <h1 className='slider-section_headeing'>Drama Series:</h1>
                <button className='slider-prev-button' onClick={() => slider?.current?.slickPrev()}>
                    <FontAwesomeIcon icon={faChevronLeft} size='2x' style={{ color: '#ffffff' }} />
                </button>
                <Slider ref={slider} {...settings}>
                    {popularDramaSeries.map((item) => (
                        <div key={item.id} className='data-item'>
                            {item.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                            )}
                            <div className='film-introduce-container'>
                                <p className='film-introduce'>
                                    <span className='film-introduce_info'>Title:</span> {item.name}
                                </p>
                                <p className='film-introduce'>
                                    <span className='film-introduce_info'>Year:</span> {item.first_air_date}
                                </p>
                                <p className='film-introduce'>
                                    <span className='film-introduce_info'>Rating:</span> {item.vote_average}
                                </p>
                                <p className='film-introduce'>
                                    <span className='film-introduce_info'>Description:</span> {item.overview}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <button className='slider-next-button' onClick={() => slider?.current?.slickNext()}>
                    <FontAwesomeIcon icon={faChevronRight} size='2x' style={{ color: '#ffffff' }} />
                </button>
            </section>
        </>
    );
};

export default PopularDramaSeriesList;