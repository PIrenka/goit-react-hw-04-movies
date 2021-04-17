import API_KEY from './apiKey';
import axios from 'axios';

const BASE_URL = 'https://themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
};

const fetchMovies = ({ media_type = 'all', time_window = 'day' }) => {
  return axios
    .get(`/trending/${media_type}/${time_window}`)
    .then(({ data }) => data.results);
};

export default { fetchMovies };
