import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './searchInput.scss'
import {useMovies} from "../../Context/Context.jsx";
const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results , setResults] = useState([])
    const { addMovie } = useMovies();
    const onChange = e =>{
        e.preventDefault()

        setSearchTerm(e.target.value)

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZjZTJhYzhmMTkzNWI4M2U0OGFjM2Y4NmE4Zjc1YyIsInN1YiI6IjY1NTk1MzQ5Y2EwZTE3MDBhZGJmYjc5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H3Dca6WGQQvXshw7UiA9Ubpirz1e6piIp8QVZHKmWKY'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&include_adult=false&language=en-US&page=1`
        , options)
            .then((res)=>res.json())
            .then(data =>{
                console.log(data)
                if(!data.errors){
                    setResults(data.results);
                } else{
                    setResults([]);
                }
            })
    }
    const filteredResults = results.filter(item => item.poster_path);
    const handleAddToWatchlist = (movie) => {
        addMovie(movie);
    }
    return (
        <>
            <section className='first-section'>
                <div className='description-container'>
                    <div>
                        <div className='description_container_logo'>
                            <h1 className='logo'>Film</h1><h1 className='logo-second'>Harbor</h1>
                        </div>
                        <p className='fistSectionDescription'>Twój przewodnik do świata filmów i seriali. Odkrywaj,
                            oglądaj i zapisuj ulubione tytuły na swojej własnej liście!</p>
                    </div>
                    <div className='search-section'>
                        <p className='search_paragraph'>Wyszukaj film dla siebie</p>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Wyszukaj swój film"
                                value={searchTerm}
                                onChange={onChange}
                            />
                            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='search-results-section'>
                <div className="data-list">
                    {results && filteredResults.length > 0 &&
                        filteredResults.map(item => (
                            <div key={item.id} className="data-item">
                                {item.poster_path && (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                    />
                                )}
                                <div className='film-introduce-container'>
                                    <p className='film-introduce'><span className='film-introduce_info'>Title:</span>{item.title}{item.name}</p>
                                    <p className='film-introduce'><span className='film-introduce_info'>Year:</span> {item.release_date}{item.first_air_date}</p>
                                    <p className='film-introduce'><span className='film-introduce_info'>Rating:</span>{item.vote_average}</p>
                                    <p className='film-introduce'><span className='film-introduce_info'> Overview: </span> {item.overview}</p>
                                </div>
                                <div>
                                    <button className='addToList' onClick={()=>handleAddToWatchlist(item)}>Add</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
    }



export default SearchInput

