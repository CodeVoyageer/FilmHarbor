import React, {useState} from "react";
import './App.css'

import Header from "./components/header/header.jsx";
import ResultsComponent from "./components/resultsSection/resultsComponent.jsx";
import SearchInput from "./components/SearchInput/searchInput.jsx";
import PopularMoviesComponent from "./components/popularMovies/popularMovies.jsx";
import FooterComponent from "./components/footerComponent/footer.jsx";



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
            <PopularMoviesComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App
