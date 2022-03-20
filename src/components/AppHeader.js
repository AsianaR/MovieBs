import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMovieService from "../services/MovieService";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AppHeader() {
  const { loading, error, getMovieById } = useMovieService();
  const MovieId = Math.random() * (996 - 100) + 100;
  const [data, setData] = useState();

  useEffect(() => {
    getMovieById(MovieId).then((value) => setData(value));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row",
        background: "#353935",
        padding: "120px 50px 60px 50px",
      }}
    >
      <Box
        component="img"
        sx={{ height: "200px", mt: "5px" }}
        alt="Movie poster"
        src={data?.poster}
      />
      <Box
        sx={{
          minHeight: "200px",
          maxWidth: "clamp(498px,60%,1000px)",
          color: "white",
          ml: "30px",
        }}
      >
        <Typography textAlign={"center"} variant="h5" component="h3">
          {data?.title}
        </Typography>
        <p>{data?.description}</p>

        <Box sx={{ textAlign: "center" }}>
          <IconButton>
            <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
          </IconButton>
          <Link to={`/movies/${data?.id}`}>
            <IconButton>
              <PlayArrowIcon style={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
