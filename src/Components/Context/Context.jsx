
import React, { createContext, useContext, useReducer, useEffect, useState} from 'react';

const MoviesContext = createContext();
const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (username) => {
        setUser({username});
    };
    const logout = () => {
        setUser(null);

    };
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

const moviesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            const updatedMovies = [...state, action.payload];
            localStorage.setItem('movies', JSON.stringify(updatedMovies));
            return updatedMovies;
        case 'REMOVE_MOVIE':
            const filteredMovies = state.filter(movie => movie.id !== action.payload.id);
            localStorage.setItem('movies', JSON.stringify(filteredMovies));
            return filteredMovies;
        default:
            return state;
    }
};

export const MoviesProvider = ({ children }) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const [movies, dispatch] = useReducer(moviesReducer, storedMovies);

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const addMovie = (movie) => {
        dispatch({ type: 'ADD_MOVIE', payload: movie });
    };
    const removeMovie = (movie) => {
        dispatch({ type: 'REMOVE_MOVIE', payload: movie });
    };

    return (
        <MoviesContext.Provider value={{ movies, addMovie, removeMovie}}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    return useContext(MoviesContext);
};
