import API_KEY from './apiKey';
import axios from 'axios';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   media_type: '',
//   time_window: '',
// };

const fetchMoviesTrend = () => {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};
// const fetchMoviesTrend = ({ media_type = 'all', time_window = 'day' }) => {
//   return axios
//     .get(`${BASE_URL}/trending/${media_type}/${time_window}`)
//     .then(({ data }) => data.results);
// };

const fetchMoviesByQuery = ({ searchQuery }) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(({ data }) => data.results);
};
//api.themoviedb.org/3/search/movie?api_key=1111111111111111111111&language=en-US&query=111111&page=1&include_adult=false

const fetchMovieById = ({ id }) => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.results);
};
//api.themoviedb.org/3/movie/{id}?api_key=<<api_key>>&language=en-US

const fetchMovieByCast = ({ id }) => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.results);
};
//api.themoviedb.org/3/movie/11111/credits?api_key=1111111111111111111111111&language=en-US

const fetchMovieByReviews = ({ id }) => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`,
      // `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(({ data }) => data.results);
};
//api.themoviedb.org/3/movie/11111/reviews?api_key=1111111111111111&language=en-US

export {
  fetchMoviesTrend,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchMovieByCast,
  fetchMovieByReviews,
  BASE_IMAGE_URL,
};
