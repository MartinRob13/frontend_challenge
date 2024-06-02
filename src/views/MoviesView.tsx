import { Grid } from "@mui/material"
import { PopularMovies } from "../components/popular/PopularMovies"
import { HeroBanner } from "../components/HeroBanner"
import { HorizontalSlider } from "../components/HorizontalSlider"
import { movieOnCinema } from "../data/movieOnCinema";
import { popular } from '../data/popular';



export const MoviesView = () => {
  return (
    <Grid container
        direction='column'
        justifyContent='space-between'
        sx={{
            m: 0
        }}
    >
        <Grid container sx={{m: 0 }}>
            <HeroBanner heroTitle="Now in theaters!" {... movieOnCinema}/>
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
