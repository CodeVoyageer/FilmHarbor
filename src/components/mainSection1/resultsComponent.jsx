import React, from "react";
import './resultsComponent.scss'
const ResultsComponent = ({searchResults}) => {
    return (
        <section>
            <div className="data-list">
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map(item => (
                        <div key={item.id} className="data-item">
                            {item.image_url && (
                                <img src={item.image_url} alt={item.name}/>
                            )}
                            {item.image_url && (
                                <>
                                    <p className='film-introduce'>{item.name}</p>
                                    <p className='film-introduce'>Year: {item.year}</p>
                                    <p className='film-introduce'>Type: {item.type}</p>
                                </>
                            )}
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