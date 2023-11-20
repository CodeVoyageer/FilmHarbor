import React from "react";
import './resultsComponent.scss'
const ResultsComponent = ({ searchResults }) => {
    const filteredResults = searchResults.filter(item => item.poster_path);

    return (
        <section>
            <div className="data-list">
                {filteredResults && filteredResults.length > 0 ? (
                    filteredResults.map(item => (
                        <div key={item.id} className="data-item">
                            {item.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt={item.title}
                                />
                            )}
                            <p className='film-introduce'>{item.title}</p>
                            <p className='film-introduce'>Year: {item.release_date}</p>
                            <p className='film-introduce'>Type: {item.media_type}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </section>
    );
};

export default ResultsComponent