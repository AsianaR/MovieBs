import { useHttp } from "../hooks/http.hook";

const useMovieService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://api.themoviedb.org/3/";
  const _apiKey = "api_key=09c952b67461e6f2b3f9a1193cfe48a8";

  const getTrends = async () => {
    const res = await request(`${_apiBase}trending/movie/day?${_apiKey}`);
    return res.results.map(_transformData);
  };

  const getGenres = async () => {
    const res = await request(`${_apiBase}genre/tv/list?${_apiKey}&language=en-US`);
    return res;
  };

  const getMovieById = async (id) => {
    const res = await request(`${_apiBase}movie/${id}?api_key=${this._apiKey}`);
    return res;
  };
  
  const _transformData = (data) => {
    return {
      title: data.title,
      description: data.overview,
      rate: data.vote_average,
      id: data.imdb_id,
      poster: "http://image.tmdb.org/t/p/w342/" + data.poster_path,
    };
  };


  return {
    loading,
    error,
    clearError,
    getTrends,
    getGenres,
    getMovieById
  };
};

export default useMovieService;
