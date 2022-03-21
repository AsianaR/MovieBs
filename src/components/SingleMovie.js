import useMovieService from "../services/MovieService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";


const SingleMovie = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  const { loading, error, getMovieById } = useMovieService();

  useEffect(() => {
    getMovieById(movieId).then((value) => setData(value));
  }, []);

  const errorMessage = error ? <p>Something went wrong</p> : null;
  const spinner = loading ? <CircularProgress color="secondary" /> : null;
  const content = !loading && !error ? <View data={data}/> : null;

  return (
    <Grid container spacing={1} sx={{ maxWidth: "1024px", minHeight:"300px", mx: "auto" }}>
      {errorMessage}
      {spinner}
      {content}
    </Grid>
  );
};

const View = ({ data}) => {
  let navigate = useNavigate();
  return (
    <>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Box
          component="img"
          sx={{ mt: "100px" }}
          alt="Movie poster"
          src={data?.poster}
        />

        <Rating
          value={data?.rate / 2}
          readOnly
          sx={{ fontSize: "3.4em", mt: "10px" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            color: "#000",
            ml: "30px",
            mt: "100px",
          }}
        >
          <Typography textAlign={"center"} variant="h4" component="h3">
            {data?.title}
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h6"
            component="h4"
            color={"#d9d9d9"}
          >
            «{data?.tagline}»
          </Typography>

          <Typography mt={"25px"} variant="body1" fontSize={"1.2em"}>
            {data?.description}
          </Typography>
          <Typography mt={"25px"} variant="h4" fontSize={"1.2em"}>
            Genres:
            {data?.genres}
          </Typography>
          <Button onClick={() => (navigate(-1))} sx={{mt: "25px", float: "right", mr: "10px" }} size="large" variant={"outlined"} >Go back</Button>
        </Box>
      </Grid>
    </>
  );
};

export default SingleMovie;
