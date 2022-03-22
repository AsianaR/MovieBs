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
    const res = await request(`${_apiBase}movie/${id}?${_apiKey}`);
    return _transformMovieData(res);
  };

  const getReviews = async (id) => {
    const res = await request(`${_apiBase}movie/${id}/reviews?${_apiKey}&language=en-US&page=1`);
    return res.results.map(_transformReviews);
  };

  const getMoviesByGenre = async (genreName, pageNumber='1') => {
    const res = await request(`${_apiBase}discover/movie?${_apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pageNumber}&with_genres=${genreName}&with_watch_monetization_types=flatrate`);
    return res.results.map(_transformData);
  };

  const Search = async (searchQuery, pageNumber = '1') => {
    const res = await request(`${_apiBase}search/movie?${_apiKey}&language=en-US&query=${searchQuery}&page=${pageNumber}&include_adult=true`);
    return res.results.map(_transformData);
  };
  
  const _transformData = (data) => {
    return {
      title: data.title,
      id: data.id,
      poster: "http://image.tmdb.org/t/p/w342/" + data.poster_path,
      };
  };

  const _transformMovieData = (data) => {
    return {
      title: data.title,
      description: data.overview,
      rate: data.vote_average,
      id: data.id,
      poster: "http://image.tmdb.org/t/p/w342/" + data.poster_path,
      tagline: data.tagline,
      genres: data.genres.map(item => <li key={item.name}>{item.name}</li>)
    };
  };

  const _transformReviews = (data) => {
    return {
      username: data.author_details.username,
      avatar: data.author_details.avatar_path,
      content: data.content
    };
  };


  return {
    loading,
    error,
    clearError,
    getTrends,
    getGenres,
    getMovieById,
    getReviews,
    getMoviesByGenre,
    Search
  };
};

export default useMovieService;
