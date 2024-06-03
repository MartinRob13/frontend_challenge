
import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        status:'not loaded',
        favoriteSaved: '',
        isSaving: true,
        movies: [],
        favorites: [],
        errorMessage: null
    },
    reducers: {
            load: (state, action) => {

            },
            addMovieToFavories:(state, action) => {

            },
            setMovies: (state,action) => {

            },
            deleteMovieById: (state, action) => {

            },
        }
});

export const {load, addMovieToFavories, setMovies, deleteMovieById} = moviesSlice.actions;