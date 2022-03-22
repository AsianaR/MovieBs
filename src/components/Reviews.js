import useMovieService from "../services/MovieService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/system/Box";
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

  return <Box>{content}</Box>;
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
          <Box sx={{ display: "flex", width: "80%", mx: "auto", mt: "50px", border: "10px black"}}>
            <Box sx={{ px:"30px", pt: "10px", border: 'primary.main', textAlign: 'center', alignItems: "center" }}>
              <Avatar src={item?.avatar? item?.avatar.substring(1): null} />
              <Typography mt="10px">{item?.username}</Typography>
            </Box>
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
          </Box>
        );
      })}
    </>
  );
};

export default Reviews;
