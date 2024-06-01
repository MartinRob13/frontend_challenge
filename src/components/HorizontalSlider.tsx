import { PopularCardInterface } from "../interface/PopularCardInterface";
import { popular } from '../data/popular';
import { Container, Typography } from "@mui/material";
import { RegularCard } from "./RegularCard";

type Props = {
    title:string;
    movies?: PopularCardInterface[]
  };
  

export const HorizontalSlider = ({title}:Props) => {

    return (
        <Container  >
            <Typography variant="h5" sx={{ color: '#fff', mb: 3}}>{title} </Typography>
            <div className="horizontalSlider full">
                {
                    popular && popular.map(content => (
                        <RegularCard key={content.id} {... content}/>
                    ))
                }
                 
            </div>
        </Container>
    );
}
