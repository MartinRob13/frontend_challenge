import { Card } from "react-bootstrap";
import { PopularCardInterface } from "../interface/PopularCardInterface"


export const RegularCard = ({ title, backdrop_path, }:PopularCardInterface) => {
    const imagePath=`https://image.tmdb.org/t/p/w500${backdrop_path}`;  

  return (
    <Card className="bg-dark text-white regularCard">
        <Card.Img src={imagePath} alt="Card image" className="regularCardImg"/>
        <Card.ImgOverlay>
        <Card.Text>
            {title}
        </Card.Text>
        </Card.ImgOverlay>
  </Card>
  )
}
