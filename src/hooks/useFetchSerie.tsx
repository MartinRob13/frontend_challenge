import { useEffect, useState } from "react";
import { PopularSeriesInterface } from "../interface/PopularSeriesInterface";


export const useFetchSerie = (id: string | undefined) => {

    const [serieOnAir, setSerie] = useState<PopularSeriesInterface>();
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;  

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
        .then(json => setSerie(json))
        .catch(err => console.error('error:' + err));
    
      }, [])

      return { serieOnAir }

}
