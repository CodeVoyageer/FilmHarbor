import React, {useState} from "react";
import Header from "../Components/HomePage/Header/header.jsx";
import FooterComponent from "../Components/HomePage/Footer/footer.jsx";
import MyListSection from "../Components/MylistPage/myListSection.jsx";
import { useUser } from "../Components/Context/Context.jsx";
import LogInSection from "../Components/LogInSection/login.jsx";
import LogInformation from "../Components/LogInSection/LogInformation.jsx";

const MyList = () =>{
    const [watchlist, setWatchlist] = useState([]);
    const { user } = useUser();
    const addToWatchMovies = (item) =>{
        setWatchlist(prevWatchlist =>[...prevWatchlist , item])
    }
    return(
        <>
            <Header/>

            {user ? (
                <MyListSection watchlist={watchlist}/>
            ) : (
                <LogInformation/>
            )}
            <FooterComponent/>
        </>
    )
}


export default MyList;