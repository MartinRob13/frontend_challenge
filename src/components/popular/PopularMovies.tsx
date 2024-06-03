
import { PopularCard } from '../PopularCard';
import { Container, Typography } from '@mui/material';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from '../../hooks/useAppDispatch';

export const PopularMovies = () => {

  const { movies } = useAppSelector(state => state.movies);
 
  return (
    <Container >

      <Typography sx={{ color: '#fff', mb: 3}} variant="h5"> Popular on MovieBay </Typography>
      <Carousel>
          {
              movies && movies.map( (movie) => (
                <Carousel.Item key={movie.id}>
                  <PopularCard type='movie' {... movie}/>
                </Carousel.Item>
        
              ))
          }
      </Carousel>
    </Container>
  )
}
