import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

export const PopularCard = ({original_title, overview, poster_path, title, id, vote_average}) => {

    const imagePath=`https://image.tmdb.org/t/p/w500${poster_path}`;  
    console.log(imagePath);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={imagePath}
                alt={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {overview}
                </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions> */}
        </Card>
    )
}
