import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './movies'
import { tvserieSlice } from './tvseries'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        tvseries: tvserieSlice.reducer,
    },
  })