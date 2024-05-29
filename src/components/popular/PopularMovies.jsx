import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { popular } from '../../data/popular';
import { PopularCard } from '../PopularCard';
import { Container, Typography } from '@mui/material';

export const PopularMovies = () => {

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
   }

  return (
    <Container 
    >
        <Typography variant="subtitle"> Popular on MovieBay: </Typography>
        <Slider {...settings}>
        {
            
            popular && popular.map( (movie, index) => (
                <PopularCard key={movie.id} index={index} {... movie}/>
            ))
        }
        </Slider>
    </Container>
  )
}
