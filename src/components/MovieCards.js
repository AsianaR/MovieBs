import useMovieService from "../services/MovieService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCards() {
  const { loading, error, getTrends } = useMovieService();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrends().then((values) => {
      setData(values);
    });
  }, []);

  function renderItems(arr) {
    const items = arr.map((item, index) => {
      return (
        <Link to={`${item?.id}`}>
          <Card
            key={index}
            sx={{ width: "300px", marginTop: "25px", textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia component="img" image={item?.poster} alt="poster" />
            </CardActionArea>
            <CardContent>
              <Typography color={"#000"}>{item?.title}</Typography>
            </CardContent>
          </Card>
        </Link>
      );
    });

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {items}
      </Box>
    );
  }

  const items = renderItems(data);
  return <div>{items}</div>;
}
