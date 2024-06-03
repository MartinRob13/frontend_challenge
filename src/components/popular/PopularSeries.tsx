import { Typography } from "@mui/material"
import { Carousel, Container } from "react-bootstrap"
import { PopularCard } from "../PopularCard"
import { popularSeries } from "../../data/popularSeries"

export const PopularSeries = () => {
  return (
    <Container >

      <Typography sx={{ color: '#fff', mb: 3}} variant="h5"> Popular on MovieBay </Typography>
      <Carousel>
          {
              popularSeries && popularSeries.map( (serie) => (
                <Carousel.Item key={serie.id}>
                  <PopularCard title={serie.name} release_date={serie.first_air_date} original_title={serie.original_name} type='tvserie' {... serie}/>
                </Carousel.Item>
        
              ))
          }
      </Carousel>
    </Container>
  )
}
