import MovieCard from "../MovieCard/MovieCard";
import useMovieService from "../../services/MovieService";
import { useEffect } from "react";

const Content = () => {
  const {loading, error, getGenres} = useMovieService();

  useEffect(() => {
    getGenres();
  }, [])
  return (
   
      <MovieCard MovieId="164" />
  
  );
};

export default Content;
