import { Grid, Typography } from "@mui/material"
import { PopularMovies } from "../components/popular/PopularMovies"

export const MoviesView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        sx={{
            mb:1
        }}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>Movies</Typography>
        </Grid>
        <Grid item sx={{ mt: 3 }}>
            <PopularMovies />
        </Grid>
    </Grid>
  )
}
