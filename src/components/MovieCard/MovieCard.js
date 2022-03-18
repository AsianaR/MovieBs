import useMovieService from "../../services/MovieService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useEffect, useState } from "react";


export default function MovieCard(props) {
  const {loading, error, getTrends} = useMovieService();
  const { MovieId } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
      getTrends().then(values => {
        setData(values);
      });
      
  }, []);

  function renderItems (arr) {
    const items = arr.map((item, index) => {
        return (
          <Card sx={{ width: "calc(18vw)", marginTop: "25px" }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item?.poster}
              alt="poster"
            />
          </CardActionArea>
        <CardContent>
          <Typography>{item?.title}</Typography>
        </CardContent>
        </Card>
        )
    })

    return (
        <ul className="comics__grid">
            {items}
        </ul>
    )
}

const items = renderItems(data);
  return (
    <div>
      {items}
    </div>
  );
}
