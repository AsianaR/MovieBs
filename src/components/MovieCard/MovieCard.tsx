import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useEffect, useState } from "react";
import MovieService from "../../services/MovieService";

export default function MovieCard(props: any) {
  const movieService = new MovieService();
  const { MovieId } = props;
  const [data, setData] = useState();

  useEffect(() => {
    const request = async (MovieId: String) => {
      const data = await movieService.getData(props.MovieId);
      setData(data);
    };
    request(MovieId);
  }, []);


  return (
      <Card sx={{ width: "calc(18vw)", marginTop: "25px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
            alt="poster"
          />
        </CardActionArea>
      <CardContent>
        <Typography>{data?.title}</Typography>
      </CardContent>
      </Card>
  );
}
