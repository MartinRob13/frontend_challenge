import { Grid } from "@mui/material"
import { PopularMovies } from "../components/popular/PopularMovies"
import { HeroBanner } from "../components/HeroBanner"
import { HorizontalSlider } from "../components/HorizontalSlider"
import { movieOnCinema } from "../data/movieOnCinema";
import { popular } from '../data/popular';
import { starLoadingMovies } from "../store/movies";
import { useAppDispatch } from "../hooks/useAppDispatch";



export const MoviesView = () => {

    const dispatch = useAppDispatch();

    dispatch( starLoadingMovies() );  

  return (
    <Grid container
        direction='column'
        justifyContent='space-between'
        sx={{
            m: 0
        }}
    >
        <Grid container sx={{m: 0 }}>
            <HeroBanner heroTitle="Now in theaters!" {... movieOnCinema} type='movie'/>
        </Grid>

        <Grid container sx={{ mt: 3 }}>
            <PopularMovies />
        
        </Grid>

        <Grid container  sx={{ mt: 4 }}>
        
            <HorizontalSlider title='Movies we recommend' movies={popular}/>
        </Grid>
    </Grid>
  )
}
