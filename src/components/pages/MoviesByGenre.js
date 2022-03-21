import SearchAppBar from "../menu/TopMenu";
import AppFooter from "../AppFooter";
import MovieList from "../MovieList"

const MoviesByGenre = () => {
  return (
    <>
      <SearchAppBar />
      <MovieList />
      <AppFooter />
    </>
  );
};

export default MoviesByGenre;
