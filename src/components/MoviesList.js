import useMovieService from "../services/MovieService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function MoviesList({ action, payload }) {
  const { loading, error, getMoviesByGenre, getTrends, Search } =
    useMovieService();
  const { genreId, genreName } = useParams();
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    request(action, payload);
  }, []);

  const request = (action, payload = "A") => {
    switch (action) {
      case "GET_MOVIE_BY_GENRE":
        return getMoviesByGenre(genreId, pageNumber)
          .then((values) => setData([...data, ...values]))
          .then(setPageNumber(pageNumber + 1));
      case "GET_TRENDS":
        return getTrends().then((values) => setData(values));
      case "SEARCH":
        return Search(payload).then((values) => setData(values));
      default:
        return null;
    }
  };

  function renderItems(arr) {
    const items = arr.map((item, index) => {
      return (
        <Link
          to={`/movies/${item?.id}`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Card
            key={index}
            sx={{ width: "300px", marginTop: "25px", textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={
                  item?.poster !== "http://image.tmdb.org/t/p/w342/null"
                    ? item?.poster
                    : "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"
                }
                alt="poster"
              />
            </CardActionArea>
            <CardContent>
              <Typography color={"#fff"}>{item?.title}</Typography>
            </CardContent>
          </Card>
        </Link>
      );
    });

    return (
      <>
        <Breadcrumbs
          sx={{
            display: "block",
            position: "absolute",
            top: "460px",
            left: "30px",
            color: "#000",
          }}
          aria-label="breadcrumb"
          separator="›"
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
            Main
          </Link>
          <Link
            to={`/${genreId}/${genreName}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            {genreName}
          </Link>
        </Breadcrumbs>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            flexDirection: "row",
            pt: "120px",
          }}
        >
          {items}
        </Box>
        <Box sx={{ textAlign: "center", pt: "80px", pb: "40px" }}>
          <Button
            onClick={() => request("GET_MOVIE_BY_GENRE")}
            variant={"outlined"}
            size={"large"}
          >
            Load more
          </Button>
        </Box>
      </>
    );
  }

  const items = renderItems(data);
  return <Box>{items}</Box>;
}
