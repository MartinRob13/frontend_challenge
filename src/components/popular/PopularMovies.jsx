import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { popular } from '../../data/popular';
import { PopularCard } from '../PopularCard';

export const PopularMovies = () => {

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
   }

  return (
    <>
        <Slider {...settings}>
        {
            
            popular && popular.map( movie => (
                <PopularCard key={heroe.id} {... heroe}/>
            ))
        }
        </Slider>
    </>
  )
}
