import { setMovies } from "."
import { useFetchGetMoviesList } from "../../hooks/useFetchGetMoviesList"

export const addMovieToFav = () => {
  return async( dispatch ) => {

  

  }
}

export const starLoadingMovies = () => {
    return async( dispatch, getState ) => {
         
        const {movies} = await useFetchGetMoviesList();
        console.log(movies)
        dispatch(setMovies(movies));

    }   
}
