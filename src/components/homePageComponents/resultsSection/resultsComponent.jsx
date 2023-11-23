import React from "react";
import './resultsComponent.scss'
const ResultsComponent = ({ searchResults }) => {
    const filteredResults = searchResults.filter(item => item.poster_path);

    return (
        <section className='search-results-section'>
            <div className="data-list">
                {filteredResults && filteredResults.length > 0 &&
                    filteredResults.map(item => (
                        <div key={item.id} className="data-item">
                            {item.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt={item.title}
                                />
                            )}
                            <div className='film-introduce-container'>
                            <p className='film-introduce'><span className='film-introduce_info'>Title:</span>{item.title}</p>
                            <p className='film-introduce'><span className='film-introduce_info'>Year:</span> {item.release_date}</p>
                            <p className='film-introduce'><span className='film-introduce_info'>Rating:</span>{item.vote_average}</p>
                                <p className='film-introduce'><span className='film-introduce_info'> Overview: </span> {item.overview}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};


export default ResultsComponent