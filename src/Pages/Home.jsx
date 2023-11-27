import React, {useState} from "react";
import '../App.css'

import Header from "../Components/HomePage/Header/header.jsx";
import ResultsComponent from "../Components/HomePage/ResultsSection/resultsComponent.jsx";
import SearchInput from "../Components/HomePage/SearchInput/searchInput.jsx";
import PopularMoviesComponent from "../Components/HomePage/Recommendation/homePopularMovies.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import PopularSeriesSlider from "../Components/HomePage/Recommendation/popularSeries.jsx";



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