import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import React from 'react'

export const PopularCard = ({overview, poster_path, title, id, vote_average, backdrop_path, release_date, popularity}) => {

    const posterImage=`https://image.tmdb.org/t/p/w500${poster_path}`;  
    const imagePath=`https://image.tmdb.org/t/p/w500${backdrop_path}`;  
    

    return (
        
        <Grid container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
        >
            <div>
                <h3>{title}</h3>
                <img src={imagePath} alt={title}/>
            </div>
            <Stack 
                spacing={2}
                direction="column"
                sx={{
                    width:"50%",
                }}
            >
               
                <div>
                    <p>Overview: {overview} </p>

                    <div>
                        <Rating
                            name="vote-average"
                            value={(vote_average*5)/10}
                            precision={0.5}
                        />
                        <p>Release date: {release_date}</p>
                        <p><Link href="https://developer.themoviedb.org/docs/popularity-and-trending">Popularity:</Link> {popularity} </p>
                        
                        
                    </div>
                </div>
            </Stack>
        </Grid>
    )
}
