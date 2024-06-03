import { useEffect, useState } from "react";
import { PopularCardInterface } from "../interface/PopularCardInterface";


export const useFetchMovie = (id: string | undefined) => {

    const [movie, setMovie] = useState<PopularCardInterface>();
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;  

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AccessAPIToken as string}`,
        }
      };  
      
      useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovie(json))
        .catch(err => console.error('error:' + err));
    
      }, [])

      return { movie }

}
