import AppHeader from "../AppHeader";
import SearchAppBar from "../menu/TopMenu";
import Content from "../Content";
import AppFooter from "../AppFooter";

const MainPage = () => {
  return (
    <>
      <SearchAppBar />
      <AppHeader />
      <Content />
      <AppFooter />
    </>
  );
};

export default MainPage;
