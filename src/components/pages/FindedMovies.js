import RandomMovie from "../RandomMovie";
import SearchAppBar from "../menu/TopMenu";
import MoviesList from "../MoviesList";
import AppFooter from "../AppFooter";
import {useParams} from "react-router-dom";

const FindedMovies = () => {
  const {searchRequest} = useParams();
  return (
    <>
      <SearchAppBar />
      <RandomMovie />
      <MoviesList action={"SEARCH"} payload={searchRequest}/>
      <AppFooter />
    </>
  );
};

export default  FindedMovies;
