import React, {useState} from "react";
import '../App.css'

import Header from "../components/homePageComponents/header/header.jsx";
import ResultsComponent from "../components/homePageComponents/resultsSection/resultsComponent.jsx";
import SearchInput from "../components/homePageComponents/SearchInput/searchInput.jsx";
import PopularMoviesComponent from "../components/homePageComponents/popularMovies/popularMovies.jsx";
import FooterComponent from "../components/homePageComponents/footerComponent/footer.jsx";



function Home() {
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

export default Home