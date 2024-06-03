import { AppLayout } from '../layout/AppLayout'
import { Stack, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material'
import { Favorite } from '@mui/icons-material';
import { useFetchSerie } from '../hooks/useFetchSerie';
import { useParams } from 'react-router';

export const SerieDetails = () => {

  const { id } = useParams();
  
  const {serieOnAir} = useFetchSerie(id);

  const imagePoster= serieOnAir?.poster_path ? `https://image.tmdb.org/t/p/w500${serieOnAir.poster_path}` : "/hero2.png";  

  return (
    <AppLayout>
      <Stack direction="column" spacing={2}>
        <Grid container direction="column" justifyContent="center" alignItems="center"  spacing={2} sx={{color: '#fff', padding: '15px'}}>
            <Grid item>
              <Typography variant="h2">{serieOnAir?.name}</Typography>
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
                    alt={serieOnAir?.name+" poster"}
                    height= '700px'
                    width= '700px'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {serieOnAir?.original_name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {serieOnAir?.overview}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Stack>
    </AppLayout>
  )
}