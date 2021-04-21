import API_KEY from './apiKey';
import axios from 'axios';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const BASE_URL = 'https://api.themoviedb.org/3';
// const TRENDS_URL = '/trending/movie/day';

axios.defaults.baseURL = BASE_URL;
// axios.default.params = {
//   api_key: API_KEY,
// };

const fetchMoviesTrend = async () =>
  await axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);

// const fetchMoviesTrend = async () => {
//   try {
//     const { data } = await axios.get(`${TRENDS_URL}`);
//     const moviesData = data.results;
//     return moviesData;
//   } catch (error) {
//     console.log('error in fetchMoviesTrend: ', { error });
//     return [];
//   }
// };

const fetchMoviesByQuery = async (searchQuery, currentPage = 1) =>
  await axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`,
    )
    .then(({ data }) => data.results);

const fetchMovieById = async id =>
  await axios
    .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);

const fetchMovieByCast = async id =>
  await axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.cast);

const fetchMovieByReviews = async id =>
  await axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.results);

export {
  fetchMoviesTrend,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchMovieByCast,
  fetchMovieByReviews,
  BASE_IMAGE_URL,
};
