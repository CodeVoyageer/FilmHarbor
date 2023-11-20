import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './searchInput.scss'
const SearchInput = ({onSearchResults}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZjZTJhYzhmMTkzNWI4M2U0OGFjM2Y4NmE4Zjc1YyIsInN1YiI6IjY1NTk1MzQ5Y2EwZTE3MDBhZGJmYjc5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H3Dca6WGQQvXshw7UiA9Ubpirz1e6piIp8QVZHKmWKY`
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            if (typeof onSearchResults === 'function') {
                onSearchResults(result.results);
            }
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    }
    return (
        <>
            <div className='first-section'>
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
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }


    // useEffect(() => {
    //     if (searchTerm.trim() !== '') {
    //         fetch(url, {method: 'GET'})
    //             .then((res) => res.json())
    //             .then((json) => {
    //                 onSearchResults(json.results)
    //             })
    //             .catch((error) => {
    //                 console.error('Błąd podczas pobierania danych:', error);
    //             });
    //     } else {
    //         onSearchResults([]);
    //     }
    // };


export default SearchInput

