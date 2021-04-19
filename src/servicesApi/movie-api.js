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
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

// const fetchMoviesByQuery = async searchQuery => {
//   await axios
//     .get(
//       `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
//     )
//     .then(({ data }) => data.results);
// };
const fetchMoviesByQuery = (searchQuery, currentPage = 1) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`,
    )
    .then(({ data }) => data.results);
};

const fetchMovieById = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.results);
  // .then(({ data }) => data);
};
//api.themoviedb.org/3/movie/{id}?api_key=<<api_key>>&language=en-US

const fetchMovieByCast = ({ id }) => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.cast);
  // .then(() => console.log()));
};
//api.themoviedb.org/3/movie/11111/credits?api_key=1111111111111111111111111&language=en-US

const fetchMovieByReviews = ({ id }) => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`,
      // `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(({ results }) => results);
  // .then(({ data }) => data.results);
  // .then(({ data }) => data.crew);
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
