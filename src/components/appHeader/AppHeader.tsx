import { useState, useEffect } from "react";
import MovieService from "../../services/MovieService";
import MultiButton from "../../utils/multiButton";
import Rating from "@mui/material/Rating";
import "./AppHeader.css";

export default function AppHeader() {
  const headerMovieService = new MovieService();
  const MovieId = Math.random() * (996 - 100) + 100;
  const [data, setData] = useState();

  useEffect(() => {
    const request = async (MovieId: String) => {
      const data = await headerMovieService.getData(MovieId);
      setData(data);
    };
    request(MovieId);
  }, []);

  return (
    <div className="header_wrapper">
      <div className="header_text">
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
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411" />
      </div>
    </div>
  );
}
