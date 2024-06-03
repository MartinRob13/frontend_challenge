
import { Stack, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material'
import { AppLayout } from '../layout/AppLayout';
import { Favorite } from '@mui/icons-material';
import { useParams } from 'react-router';
import { useFetchMovie } from '../hooks/useFetchMovie';

export const MovieDetails = () => {

  const { id } = useParams();
  
  const {movie} = useFetchMovie(id);
  
  const imagePoster= movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/hero2.png";
  

  return (
    <AppLayout>
      <Stack direction="column" spacing={2}>
        <Grid container direction="column" justifyContent="center" alignItems="center"  spacing={2} sx={{color: '#fff', padding: '15px'}}>
            <Grid item>
              <Typography variant="h2">{movie?.title}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" endIcon={<Favorite />}>
                Add to Favorite
              </Button>
            </Grid>
            <Grid>
              <Card sx={{ maxWidth: 700 }}>
                
                  <CardMedia
                    component="img"
                    image={imagePoster}
                    alt={movie?.title+" poster"}
                    height= '700px'
                    width= '700px'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie?.original_title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {movie?.overview}
                    </Typography>
                  </CardContent>
                
              </Card>
            </Grid>
        </Grid>
      </Stack>
    </AppLayout>
  )
}
