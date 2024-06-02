import { PopularCardInterface } from "../interface/PopularCardInterface";
import { Container, Typography } from "@mui/material";
import { RegularCard } from "./RegularCard";
import { PopularSeriesInterface } from "../interface/PopularSeriesInterface";

type Props = {
    title:string;
    movies?: PopularCardInterface[];
    series?: PopularSeriesInterface[];
  };
  

export const HorizontalSlider = ({title, movies, series}:Props) => {

    return (
        <Container  >
            <Typography variant="h5" sx={{ color: '#fff', mb: 3}}>{title} </Typography>
            <div className="horizontalSlider full">
                {
                    movies && movies.map(content => (
                        <RegularCard key={content.id} {... content}/>
                    ))
                }
                {
                    series && series.map(content => (
                        <RegularCard key={content.id} title={content.name} release_date={content.first_air_date} {... content} />
                    ))
                }
                 
            </div>
        </Container>
    );
}
