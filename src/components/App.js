import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage"
import NotFound from "./pages/404"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/movies" element={<MainPage/>}/>
        <Route  path="/movies/:movieId" element={<MoviePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
