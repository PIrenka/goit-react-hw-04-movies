import API_KEY from './apiKey';
import axios from 'axios';

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

const fetchMoviesByQuery = ({ media_type = 'all', time_window = 'day' }) => {
  return axios
    .get(`${BASE_URL}/trending/${media_type}/${time_window}`)
    .then(({ data }) => data.results);
};

export { fetchMoviesTrend, fetchMoviesByQuery };
