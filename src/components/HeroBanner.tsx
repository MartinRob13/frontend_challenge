import { Box, Grid, Typography } from "@mui/material";
import { movieOnCinema } from "../data/movieOnCinema";

export const HeroBanner = () => {

    const bannerImg="/hero_img.png";

  return (
      <Grid container sx={{ backgroundImage: `url(${bannerImg})`,  height: { sm: '', md:'500px'}, m:0, color: '#fff', backgroundSize: 'cover'}}>
        <Grid container sx={{ background: 'rgba(0, 0, 0, 0.6)'}}>
            <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
                <Box>
                    <Typography variant="h4" gutterBottom >Now in theaters!</Typography>
                </Box>
                {
                    movieOnCinema && movieOnCinema.map(movie => (
                        <Box key={movie.id} sx={{ display: 'flex', flexDirection: { xs:'column', md: 'row'}, alignItems: 'center'}}>
                           
                            <Box>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>

                                <Typography>{movie.title}</Typography>
                            </Box>
                            <Box sx={{ display:'flex', alignItems:'center', maxWidth: '300px', background: 'rgb(255 255 255 / 20%)', height: '100%',}}>
                                <Typography sx={{ p: 2, textAlign:'center' }}>{movie.overview}</Typography>    
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
        </Grid>
    </Grid>
  )
}
