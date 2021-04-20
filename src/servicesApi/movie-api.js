import API_KEY from './apiKey';
import axios from 'axios';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;

const fetchMoviesTrend = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchMoviesByQuery = (searchQuery, currentPage = 1) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`,
    )
    .then(({ data }) => data.results);
};

const fetchMovieById = async id =>
  await axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);

const fetchMovieByCast = ({ id }) => {
  return axios
    .get(
      `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(({ data }) => {
      console.log('data.cast: ', data.cast);
      // return data.cast;
    });
};

const fetchMovieByReviews = async id =>
  await axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(
      ({ data }) =>
        // console.log('results: ', data.results);
        data.results);
// .then(({ results }) => {
//   console.log('results: ', results);
//   return results;
// });
// .then(({ data }) => data.crew);
export {
  fetchMoviesTrend,
  fetchMoviesByQuery,
  fetchMovieById,
  fetchMovieByCast,
  fetchMovieByReviews,
  BASE_IMAGE_URL,
};
