import useMovieService from "../services/MovieService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  const { loading, error, getReviews } = useMovieService();

  useEffect(() => {
    getReviews(movieId)
      .then((value) => setData(value));
  }, []);

  return(
    <div>
    
      {/* {data[0]?.username} */}
    </div>
  )

}

export default Reviews;
