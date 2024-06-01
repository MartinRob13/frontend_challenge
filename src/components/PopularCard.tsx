import { Grid, Link, Rating, Typography } from '@mui/material';
import { PopularCardInterface } from '../interface/PopularCardInterface';
import { Carousel } from 'react-bootstrap';

export const PopularCard = ({overview, title, id, vote_average, backdrop_path, release_date, popularity}:PopularCardInterface) => {

    const imagePath=`https://image.tmdb.org/t/p/w500${backdrop_path}`;  
    
    return (
        
        <Grid container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
            key={id}
        >
            
            <img src={imagePath} alt={title} width='100%'/>
           
            <Carousel.Caption>
            <div>
                <h3>{title}</h3>
            </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Typography sx={{ textOverflow: 'ellipsis', fontSize: {xs: '10px', md:'16px'} }} >Overview: {overview} </Typography>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                        <div>
                            Rating: 
                            <Rating
                            name="vote-average"
                            value={(vote_average*5)/10}
                            precision={0.5}
                            readOnly
                        />
                        </div>
                        <p>Release date: {release_date}</p>
                        <p>
                            <Link color="secondary.light" href="https://developer.themoviedb.org/docs/popularity-and-trending" target="_blank" rel="noopener">
                                Popularity:
                            </Link> {popularity} 
                        </p>
                        
                        
                    </div>
                </div>
            </Carousel.Caption>
        </Grid>
       
    
        )
}
