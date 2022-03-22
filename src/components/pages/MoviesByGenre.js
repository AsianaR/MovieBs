import SearchAppBar from "../menu/TopMenu";
import AppFooter from "../AppFooter";
import MoviesList from "../MoviesList"
import RandomMovie from "../RandomMovie";


const MoviesByGenre = () => {
  return (
    <>
      <SearchAppBar />
      <RandomMovie/>
      <MoviesList action={"GET_MOVIE_BY_GENRE"}/>
      <AppFooter />
    </>
  );
};

export default MoviesByGenre;
