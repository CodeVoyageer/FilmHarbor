import React, {useState} from "react";
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import MyListSection from "../Components/MylistPage/myListSection.jsx";


const MyList = () =>{
    const [watchlist, setWatchlist] = useState([]);
    const addToWatchMovies = (item) =>{
        setWatchlist(prevWatchlist =>[...prevWatchlist , item])
    }
    return(
        <>
            <Header/>
<MyListSection watchlist={watchlist}/>

            <FooterComponent/>
        </>
    )
}


export default MyList;