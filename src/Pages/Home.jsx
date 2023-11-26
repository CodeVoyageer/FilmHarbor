import React, {useState} from "react";
import '../App.css'

import Header from "../components/HomePage/Header/header.jsx";
import ResultsComponent from "../components/HomePage/ResultsSection/resultsComponent.jsx";
import SearchInput from "../components/HomePage/SearchInput/searchInput.jsx";
import PopularMoviesComponent from "../components/HomePage/Recommendation/homePopularMovies.jsx";
import FooterComponent from "../components/HomePage/Footer/footer.jsx";
import PopularSeriesSlider from "../components/HomePage/Recommendation/popularSeries.jsx";



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
            <PopularSeriesSlider/>
            <FooterComponent/>
        </div>
    );
}

export default Home