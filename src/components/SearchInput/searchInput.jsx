import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './searchInput.scss'
const SearchInput = ({onSearchResults}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
    let url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=6h0fDZd8HKQ5QfYQOIscltGddN1FjhSxe72qb5Wh&search_field=name&search_value=${searchTerm}`;
        if (searchTerm.trim() !== ''){
            fetch(url, { method: 'GET' })
                .then((res) => res.json())
                .then((json) => {
                    if (typeof onSearchResults === 'function') {
                        onSearchResults(json.results);
                    }
                })
                .catch((error) => {
                    console.error('Błąd podczas pobierania danych:', error);
                });
        }else{
            onSearchResults([]);
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

