import useMovieService from "../../services/MovieService";
import SearchAppBar from "../menu/TopMenu";
import AppFooter from "../AppFooter";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  const { loading, error, getMovieById } = useMovieService();

  useEffect(() => {
    getMovieById(movieId).then((value) => setData(value));
  }, []);

  console.log(data);
  return (
    <>
      <SearchAppBar />
      <Container sx={{display: "flex"}}>
        <Box
          component="img"
          sx={{ mt: "100px" }}
          alt="Movie poster"
          src={data?.poster}
        />
        <Box
          sx={{
            color: "#000",
            ml: "30px",
            mt: "100px"
          }}
        >
          <Typography textAlign={"center"} variant="h4" component="h3"> 
            {data?.title}
          </Typography>
          <Rating value={data?.rate/2} readOnly sx={{fontSize : "2em", mt: "50px"}}/>
          <p>{data?.description}</p>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
};

export default MoviePage;
