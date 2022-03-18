import { useState, useEffect } from "react";
<<<<<<< HEAD
import useMovieService from "../../services/MovieService";
=======
import MovieService from "../../services/MovieService";
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8
import MultiButton from "../../utils/multiButton";
import Rating from "@mui/material/Rating";
import "./AppHeader.css";

export default function AppHeader() {
<<<<<<< HEAD
  const { loading, error, getTrends } = useMovieService();
=======
  const headerMovieService = new MovieService();
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8
  const MovieId = Math.random() * (996 - 100) + 100;
  const [data, setData] = useState();

  useEffect(() => {
<<<<<<< HEAD
    // console.log(getTrends());
=======
    const request = async (MovieId: String) => {
      const data = await headerMovieService.getData(MovieId);
      setData(data);
    };
    request(MovieId);
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8
  }, []);

  return (
    <div className="header_wrapper">
<<<<<<< HEAD
      {/* <div className="header_text">
=======
      <div className="header_text">
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8
        <h2>{data?.title}</h2>

        <Rating
          name="read-only"
          value={data?.rate / 2}
          readOnly
          style={{ fontSize: "3vw" }}
        />

        <p>{data?.description}</p>
        <MultiButton />
      </div>
      <div className="header_img">
<<<<<<< HEAD
        <iframe
          src="https://www.youtube.com/embed/uI7fnrNhKSI?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div> */}
=======
      <iframe src="https://www.youtube.com/embed/uI7fnrNhKSI?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8
    </div>
  );
}
