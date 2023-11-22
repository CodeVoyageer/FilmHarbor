import React from "react";


const App = ()=>{
    return(
        <>
            <section>
                <h2 className='random-movies-heading'>the most popular movies:</h2>
                <div className='popular-movies-container'>
                    <div className="data-list">
                        {randomMovies && randomMovies.length > 0 &&
                            randomMovies.map(item => (
                                <div key={item.id} className="data-item">
                                    {item.poster_path && (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            alt={item.title}
                                        />
                                    )}
                                    <p className='film-introduce'><span className='film-introduce_info'>Title:</span>{item.title}</p>
                                    <p className='film-introduce'><span className='film-introduce_info'>Year:</span> {item.release_date}</p>
                                    <p className='film-introduce'><span className='film-introduce_info'> Rating: </span> {item.vote_average}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
