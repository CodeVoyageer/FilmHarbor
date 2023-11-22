import React, {useState} from "react";
import './App.css'

import Header from "./components/header/header.jsx";
import ResultsComponent from "./components/mainSection1/resultsComponent.jsx";
import SearchInput from "./components/SearchInput/searchInput.jsx";
import RandomMoviesComponent from "./components/RandomMovies/randomMovies.jsx";


function App() {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchResults = (results) => {
        console.log('Received search results in App:', results);
        setSearchResults(results);
        console.log('Search results:', results);
    };

    return (
        <div className="app">
            <Header/>
            <SearchInput onSearchResults={handleSearchResults}/>
            <ResultsComponent searchResults={searchResults}/>
            <RandomMoviesComponent/>
        </div>
    );
}

export default App
