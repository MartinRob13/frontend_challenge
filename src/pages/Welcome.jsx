import React from 'react'
import { PopularMovies } from '../components/popular/PopularMovies'
import { AppLayout } from '../layout/AppLayout'
import { HomeView } from '../views/HomeView'
import { MoviesView } from '../views/MoviesView'

export const Welcome = () => {
  return (
    <AppLayout>
       <MoviesView />
    </AppLayout>
  )
}
