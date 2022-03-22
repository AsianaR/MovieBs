import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import MoviesByGenre from "./pages/MoviesByGenre";
import FindedMovies from "./pages/FindedMovies";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:genreId/:genreName" element={<MoviesByGenre />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        <Route path="/find/:searchRequest" element={<FindedMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
