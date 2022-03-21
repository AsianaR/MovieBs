import AppHeader from "../AppHeader";
import SearchAppBar from "../menu/TopMenu";
import TrendMovies from "../TrendMovies";
import AppFooter from "../AppFooter";

const MainPage = () => {
  return (
    <>
      <SearchAppBar />
      <AppHeader />
      <TrendMovies />
      <AppFooter />
    </>
  );
};

export default MainPage;
