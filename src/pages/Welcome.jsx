import React from 'react'
import { PopularMovies } from '../components/popular/PopularMovies'
import { AppLayout } from '../layout/AppLayout'

export const Welcome = () => {
  return (
    <AppLayout>
        <PopularMovies />
    </AppLayout>
  )
}
