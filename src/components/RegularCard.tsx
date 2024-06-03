import { Card } from "react-bootstrap";
import { PopularCardInterface } from "../interface/PopularCardInterface"
import { Link } from "react-router-dom";


export const RegularCard = ({ title, backdrop_path, type, id}:PopularCardInterface) => {
  const imagePath= backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : "/hero2.png";  

  let detailsUrl = '#';
  if(type==='movie'){
      detailsUrl = `/moviedetails/${id}`
  }
  else if(type==='tvserie'){
      detailsUrl = `/seriedetails/${id}`

  }

  return (
    <Link to={detailsUrl} >
      <Card className="bg-dark text-white regularCard" >
          <Card.Img src={imagePath} alt="Card image" className="regularCardImg"/>
          <Card.ImgOverlay>
          <Card.Text>
              {title}
          </Card.Text>
          </Card.ImgOverlay>
      </Card>
    </Link>
  )
}
