import SearchAppBar from "../menu/TopMenu";
import AppFooter from "../AppFooter";
import SingleMovie from "../SingleMovie";
import Reviews from "../Reviews";

const MoviePage = () => {


  return (
    <>
      <SearchAppBar />
      <SingleMovie/>
      <Reviews/>
      <AppFooter />
    </>
  );
};

export default MoviePage;
