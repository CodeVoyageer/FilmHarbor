import { createClient } from "@supabase/supabase-js"
import React, { createContext, useContext, useReducer, useEffect,useState } from 'react';
const MoviesContext = createContext();
const supabaseUrl = "https://tmjiqmfknjjmvayqgwxt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtamlxbWZrbmpqbXZheXFnd3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NzY0MTEsImV4cCI6MjAxODA1MjQxMX0.nNIfIoTGZuSg0APdgDIRYBAxkpPNhlXXf2a-7O50Sd8";
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(supabase.auth.getUser());

    const register = async (email, password) => {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setUser(user);
    };

    const login = async (email, password) => {
        console.log(email, password)
        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setUser(user);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    useEffect(() => {
        const authListener = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });
        return authListener.data.unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUser = () => {
    return useContext(AuthContext);
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
