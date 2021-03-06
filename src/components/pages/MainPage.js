import RandomMovie from "../RandomMovie";
import SearchAppBar from "../menu/TopMenu";
import MoviesList from "../MoviesList";
import AppFooter from "../AppFooter";

const MainPage = () => {
  return (
    <>
      <SearchAppBar />
      <RandomMovie />
      <MoviesList action={"GET_TRENDS"}/>
      <AppFooter />
    </>
  );
};

export default MainPage;
