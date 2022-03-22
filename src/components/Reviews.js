import useMovieService from "../services/MovieService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  const { loading, error, getReviews } = useMovieService();

  useEffect(() => {
    getReviews(movieId).then((value) => setData(value));
  }, []);

  console.log(data);

  const length = data !== undefined ? data.length : null;
  const content = length ? <View data={data} /> : null;

  return <Container>{content}</Container>;
};

const View = ({ data }) => {
  console.log(data[0].username, data[0].avatar);
  return (
    <>
      <Typography textAlign="center" mt="80px" variant="h4">
        Reviews
      </Typography>

      {data?.map((item) => {
        return (
          <Grid container spacing={2} sx={{  width: "80%", mx: "auto", mt: "50px", border: "10px black"}}>
            <Grid item xs={2} sx={{ px:"30px", pt: "10px", border: 'primary.main', textAlign: "center" }}>
              <Avatar src={item?.avatar? item?.avatar.substring(1): null} sx={{mx: "auto"}}/>
              <Typography mt="10px">{item?.username}</Typography>
            </Grid>
            <Grid item xs={10}>
            <Typography>
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={"Open ▼"}
              readLessText={"Close ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              
                
              {item?.content}
            </ReactReadMoreReadLess>
              </Typography>
              </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Reviews;
