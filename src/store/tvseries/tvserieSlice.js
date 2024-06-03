import { createSlice } from '@reduxjs/toolkit';

export const tvserieSlice = createSlice({
    name: 'tvseries',
    initialState: {
        status:'not loaded',
        isSaving: true,
        favoriteSaved: '',
        movies: [],
        favorites: [],
        errorMessage: null
    },
    reducers: {
            load: (state, action) => {

            },
            addSerieToFavories:(state, action) => {

            },
            setSeries: (state, action) => {
                
            },
            deleteSerieById: ( state, action ) => {

            }
        }
});

export const {load, addSerieToFavories, setSeries, deleteSerieById } = tvserieSlice.actions;