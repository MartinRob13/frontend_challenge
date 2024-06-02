import { Route, Routes } from "react-router"
import { LoginPage } from "../pages/LoginPage"
import { Welcome } from "../pages/Welcome"
import { MovieDetails } from "../pages/MovieDetails"
import { SerieDetails } from "../pages/SerieDetails"
import { SeriesPage } from "../pages/SeriesPage"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage />}/>

        <Route path="moviedetails/:id" element={ <MovieDetails />}/>
        <Route path="seriedetails/:id" element={ <SerieDetails />}/>

        <Route path="movies" element={ <Welcome />}/>
        <Route path="series" element={ <SeriesPage />}/>


        <Route path='/*' element={ <Welcome />} />
    </Routes>
  )
}
