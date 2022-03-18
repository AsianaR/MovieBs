import { useState, useEffect } from "react";
import useMovieService from "../../services/MovieService";
import MultiButton from "../../utils/multiButton";
import Rating from "@mui/material/Rating";
import "./AppHeader.css";

export default function AppHeader() {
  const { loading, error, getTrends } = useMovieService();
  const MovieId = Math.random() * (996 - 100) + 100;
  const [data, setData] = useState();

  useEffect(() => {
    // console.log(getTrends());
  }, []);

  return (
    <div className="header_wrapper">
      {/* <div className="header_text">
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
        <iframe
          src="https://www.youtube.com/embed/uI7fnrNhKSI?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div> */}
    </div>
  );
}
