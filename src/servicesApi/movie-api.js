import API_KEY from './apiKey';
import axios from 'axios';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: 'false',
};

const fetchMoviesTrend = async () =>
  await axios.get(`/trending/movie/day`).then(({ data }) => data.results);

// const fetchMoviesTrend = async () => {
//   try {
//     const { data } = await axios.get('/trending/movie/day');
//     const moviesData = data.results;
//     return moviesData;
//   } catch (error) {
//     console.log('error in fetchMoviesTrend: ', { error });
//     return [];
//   }
// };

const fetchMoviesByQuery = async (query, page = 1) =>
  await axios
    .get(`/search/movie`, { params: { query, page } })
    .then(({ data }) => data.results);

const fetchMovieById = async id =>
  await axios.get(`/movie/${id}`).then(({ data }) => data);

const fetchMovieByCast = async id =>
  await axios.get(`/movie/${id}/credits`).then(({ data }) => data.cast);

const fetchMovieByReviews = async id =>
  await axios.get(`/movie/${id}/reviews`).then(({ data }) => data.results);

export {
  fetchMoviesTrend,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchMovieByCast,
  fetchMovieByReviews,
  BASE_IMAGE_URL,
};
