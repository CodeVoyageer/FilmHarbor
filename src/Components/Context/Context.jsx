
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const MoviesContext = createContext();

const moviesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            const updatedMovies = [...state, action.payload];
            localStorage.setItem('movies', JSON.stringify(updatedMovies));
            return updatedMovies;
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

    return (
        <MoviesContext.Provider value={{ movies, addMovie }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    return useContext(MoviesContext);
};
