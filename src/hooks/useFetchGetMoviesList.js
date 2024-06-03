import { useEffect, useState } from "react"
import { starLoadingMovies } from "../store/movies";
import { useDispatch } from "react-redux";


export const useFetchGetMoviesList = () => {

    const [movies, setMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AccessAPIToken}`,
        }
      };  
      
      useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            setMovies(json.results)
        })
        .catch(err => console.error('error:' + err));
    
      }, [])

      return {movies}

}